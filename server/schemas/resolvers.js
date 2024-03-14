const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Musician, Tag } = require("../models")
const { geoCode, sortByDistance } = require('../utils/helpers');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    userById: async(parent, { userId }) => {
      return await User.findOne({_id: userId});
    }
    ,

    userByUsername: async (parent, { username }) => {
      return await User.findOne({ username: username });
    },

    musicianById: async (parent, { musicianId }) => {
      return await Musician.findOne({ _id: musicianId });
    },

    musiciansByLocation: async (parent, { lat, lon }) => {
      const MUSICIANS = await Musicians.find({});

      // Sort musicians by their distance from the inputted location
      return MUSICIANS.sort(sortByDistance({lat, lon}));
    },

    tags: async () => {
      return await Tag.find();
    },

    // For finding musicians that match ALL selected tags
    musiciansByTags: async (parent, { tags }) => {
      try {
        return await Musician.find({ tags: { $all: tags }});
      } catch (err) {
        console.error('Error searching by tags: ', err);
        throw new Error('Error searching by tags')
      }
    }
  },

  Mutation: {

    addUser: async (parent, { userData }) => {
      const user = await User.create({ userData });
      const token = signToken(user);
      return { token, user };
    },


    addMusician: async (parent, { user: user, stageName, publicEmail, tags, city, state, description = null, imageLink = null, minCost = null }) => {
      console.log(user);
      const { lat, lon } = await geoCode(city, state);
      console.log(lat, lon);

      if (lat === null || lon === null) {
        throw new Error("Location not found");
      }

      return Musician.create({
        user: user,
        stageName: stageName,
        publicEmail: publicEmail,
        tags: tags,
        city: city,
        state: state,
        lat: lat,
        lon: lon,
        minCost: minCost
      });

    },

    // Mutation for updating users
    updateUser: async (parent, { userId, email, username, first, last, isMusician }) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          {
            _id: userId,
          },
          {
            $set: {
              email, username, first, last, isMusician
            }
          },
          {
            new: true
          }
        );
        const token = signToken(updatedUser);
        return { token, updatedUser };

      } catch (err) {
        console.error("Error updating user: ", err);
        throw new Error("Could not update user.");
      };
    },

    // Mutation for updating musicians, not including tags
    updateMusician: async (parent, { musicianId, imageLink, stageName, publicEmail, description, city, state, minCost }) => {
      try {
        // Gets lat and lon from provided city and state
        const { lat, lon } = await geoCode(city, state);
        console.log(lat, lon);

        const updatedMusician = await Musician.findOneAndUpdate(
          {
            _id: musicianId,
          },
          {
            $set: {
              imageLink, stageName, publicEmail, description, city, state, lat, lon, minCost
            }
          },
          {
            new: true
          }
        );

        return updatedMusician;

      } catch (err) {
        console.error("Error updating musician: ", err);
        throw new Error("Could not update musician.");
      };
    },

    // Mutation for adding tags by their ids to a musician found by id
    addTags: async (parent, { musicianId, tagIds }) => {
      try {
        const updatedMusician = await Musician.findOneAndUpdate(
          {
            _id: musicianId,
          },
          {
            $addToSet: { tags: tagIds }
          },
          {
            new: true
          }
        );

        return updatedMusician;

      } catch (err) {
        console.error("Error adding tags: ", err);
        throw new Error("Could not add tags.");
      };
    },

    // Mutation for removing tags by their ids to a musician found by id
    removeTags: async (parent, { musicianId, tagIds }) => {
      try {
        const updateMusician = await Musician.findOneAndUpdate(
          {
            _id: musicianId,
          },
          {
            // $in operator to ensure each tagId within the array is used
            $pull: { tags: { $in: tagIds } },
          },
          {
            new: true
          }
        );

        return updateMusician;

      } catch (err) {
        console.error("Error removing tags: ", err);
        throw new Error("Could not remove tags")
      };
    },

    // Mutation for login
    login: async (parent, { email, password }) => {
      try {
        // Checks for valid user
        const user = await User.findOne({ email });
        if (!user) {
          throw AuthenticationError;
        };

        // Checks for valid password
        const validPassword = await user.isValidPassword(password);
        if (!validPassword) {
          throw AuthenticationError;
        };

        const token = signToken(user);
        return { token, user };

      } catch (err) {
        console.error("Error logging in: ", err);
        throw new Error("Could not log in.")
      }
    }
  },
};

module.exports = resolvers;

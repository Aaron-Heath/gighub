const { signToken } = require('../utils/auth');
const { User, Musician, Tag }= require("../models")
const { milesFromCoord, geoCode } = require('../utils/helpers');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    
    userByUsername: async (parent, { username }) => {
      return await User.findOne({username: username});
    },

    musicianById: async (parent, { musicianId }) => {
      return await Musician.findOne({_id: musicianId});
    },

    musiciansByLocation: async (parent, { lat, lon }) => {
      const MUSICIANS = await Musicians.find({});

      // Sort musicians by their distance from the inputted location
      return MUSICIANS.sort( (a,b) => {
        const distanceA = milesFromCoord(a.lat, a.lon, lat, lon);
        const distanceB = milesFromCoord(b.lat, b.lon, lat, lon);

        if(distanceA > distanceB) return 1;
        if(distanceA < distanceB) return -1;
        return 0;
      });
    }
  },

  Mutation: {

    addUser: async (parent, { userData }) => {
      const user = await User.create({ userData });
      const token = signToken(user);
      return {token, user};
    },

    
    addMusician: async (parent, { user: user, stageName, publicEmail, tags, city, state, description=null, imageLink=null, minCost=null }) => {
      console.log(user);
      const {lat, lon } = await geoCode(city, state);
      console.log(lat,lon);

      if(lat === null || lon === null) {
        throw new Error("Location not found");
      }
      
      return Musician.create( {
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









    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;

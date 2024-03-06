const { signToken } = require('../utils/auth');
const { User, Musician, Tag }= require("../models")


const resolvers = {
  Query: {
    // profiles: async () => {
    //   return Profile.find();
    // },

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId });
    // },

    // musiciansByLocation: async (parent, {lat, lon}) => {
    //   const MUSICIANS = await Musician.find({});

    //   return MUSICIANS.sort(() => {
    //     //sort in ascending order by distance

    //   });

    // }
  },

  Mutation: {

    addUser: async (parent, { userData }) => {
      const user = await User.create({ userData });
      const token = signToken(user);
      return {token, user};
    },

    
    // addMusician: async (parent, musicianData) => {
    //   const {lat, lon } = getLatLon(MusicianData.city, MusicianData.state);
      
    //   return Musician.create(MusicianData)

    // },









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

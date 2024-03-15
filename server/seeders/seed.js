const db = require('../config/connection');
const userSeeds = require('./userSeeds.json');
const { User, Tag, Musician } = require('../models');
const cleanDB = require('./cleanDB');
const tagSeeds = require('./tagSeeds.json');
const musicianSeeds = require('./musicianSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    // Clear previous seed data
    await cleanDB('Tag', 'tags');
    await cleanDB('Musician', 'musicians');
    
    // Created seeds
    const seededUsers = await User.create(userSeeds);
    const seededTags = await Tag.create(tagSeeds);
    const seededMusicians = await Musician.create(musicianSeeds);
    console.log("Seeded users", "Seeded musicians", "Seedes tags");
    console.log(seededMusicians);

  // To seed Musicians with Tags
    async function seedJawn() {
    for(let i=0; i<seededMusicians.length; i++) {
      console.log(`Run ${[i]}`)
      console.log(seededMusicians[i].stageName)
      const bandId = seededMusicians[i]._id.toString();
      // console.log(bandId);
        try {
          console.log("Start try");
          
          const updatedMusician = await Musician.findOneAndUpdate({_id: bandId},
          {
            $push: {tags: seededTags[8]._id.toString()}
          }, {new: true});

          console.log("End try")
          console.log(updatedMusician)
          return updatedMusician;
        } catch (error) {
          console.log(error)
        }
      }
      // console.log(updatedMusician)
      process.exit(0)
    }

    seedJawn();
    


    // console.log('all done!');
    // console.log(seededUsers);
    // console.log(seededTags);
    // console.log(seededMusicians);
    // process.exit(0);
  } catch (err) {
    throw err;
  }
});

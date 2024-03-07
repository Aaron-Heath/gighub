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

    console.log('all done!');
    console.log(seededUsers);
    console.log(seededTags);
    console.log(seededMusicians);
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

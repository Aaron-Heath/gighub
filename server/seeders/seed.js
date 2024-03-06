const db = require('../config/connection');
const { Tag, Musician } = require('../models');
const cleanDB = require('./cleanDB');
const tagSeeds = require('./tagSeeds.json');
const musicianSeeds = require('./musicianSeeds.json');

db.once('open', async () => {
  try {
    // Clear previous seed data
    await cleanDB('Tag', 'tags');
    await cleanDB('Musician', 'musicians');
    
    // Created seeds
    const seededTags = await Tag.create(tagSeeds);
    const seededMusicians = await Musician.create(musicianSeeds);

    console.log('all done!');
    console.log(seededTags);
    console.log(seededMusicians);
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

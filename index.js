// --- Strings ---
const farmAnimals = 'cow horse sheep pig chicken';

// Destructuring animal sounds (moo, neigh, baa, oink, cluck)
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// Destructuring traditional animal names (bessie, dolly, babe, little)
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// Destructuring traditional animal colors (blackAndWhite, black, pink)
const [blackAndWhite, , black, pink, ] = farmAnimals.split(' ');

// --- Arrays ---
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructure all seven colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructure only the first letter of each color (except indigo)
const [r, o, y, g, b, , v] = colors;

// Destructure only indigo using `indg`
const [, , , , , indg] = colors;

// --- Objects ---
const muppet = {
  muppetName: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

// Destructure all keys into matching variables
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructure only song2 and song4, job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

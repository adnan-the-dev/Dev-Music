export const adjectives = [
  "Harmonic",
  "Melodic",
  "Rhythmic",
  "Lyrical",
  "Symphonic",
  "Groovy",
  "Funky",
  "Soulful",
  "Bluesy",
  "Electric",
  "Acoustic",
  "Vibrant",
  "Dynamic",
  "Ethereal",
  "Uplifting",
  "Chill",
  "Ambient",
  "Epic",
  "Dark",
  "Bright",
];

export const nouns = [
  "Symphony",
  "Harmony",
  "Beat",
  "Groove",
  "Melody",
  "Rhythm",
  "Tune",
  "Vibe",
  "Chorus",
  "Riff",
  "Soundscape",
  "Serenade",
  "Ballad",
  "Anthem",
  "Cadence",
  "Refrain",
  "Song",
  "Ditty",
  "Aria",
  "Sonata",
];

// Function to generate a random music name
export function generateRandomMusicName() {
  // Pick a random adjective and noun from the arrays
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  // Combine the adjective and noun to form the music name
  return `${randomAdjective} ${randomNoun}`;
}

export function getShortName(fullName, maxLength = 12) {
  if (!fullName) return "";

  // Trim any extra spaces from the name
  const trimmedName = fullName.trim();

  // Check if the name length is more than maxLength characters
  if (trimmedName.length > maxLength) {
    return trimmedName.slice(0, maxLength) + "...";
  }

  // Return the original name if it's maxLength characters or less
  return trimmedName;
}

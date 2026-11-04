export const ROLES = [
  'Crewmate',
  'Impostor',
  'Engineer',
  'Scientist',
  'Guardian Angel',
  'Tracker',
  'Noisemaker',
  'Detective',
  'Shapeshifter',
  'Phantom',
  'Viper',
  'Judge',
]

export const ROLE_DESCRIPTIONS = {
  Crewmate: 'Finishes tasks and keeps the ship running.',
  Impostor: 'Blends in with the crew... and waits for the right moment.',
  Engineer: 'Can hop into vents to get around the ship fast.',
  Scientist: 'Checks crew vitals from anywhere on the ship.',
  'Guardian Angel': 'Watches over the crew and shields them from harm.',
  Tracker: 'Tags a crewmate and follows their every move.',
  Noisemaker: 'Sets off an alert the moment they are taken out.',
  Detective: 'Investigates suspects and pieces together the truth.',
  Shapeshifter: 'Disguises as other crewmates to sow confusion.',
  Phantom: 'Turns invisible to slip away unseen.',
  Viper: 'Strikes quickly and leaves little trace behind.',
  Judge: 'Weighs the evidence and casts the deciding vote.',
}

export const COLORS = [
  { name: 'Red', hex: '#c51111' },
  { name: 'Blue', hex: '#132ed1' },
  { name: 'Green', hex: '#117f2d' },
  { name: 'Pink', hex: '#ed54ba' },
  { name: 'Orange', hex: '#ef7d0d' },
  { name: 'Yellow', hex: '#f5f557' },
  { name: 'Black', hex: '#3f474e' },
  { name: 'White', hex: '#d6e0f0' },
  { name: 'Purple', hex: '#6b2fbb' },
  { name: 'Brown', hex: '#71491e' },
  { name: 'Cyan', hex: '#38fedc' },
  { name: 'Lime', hex: '#50ef39' },
  { name: 'Maroon', hex: '#6b2b3c' },
  { name: 'Rose', hex: '#ecc0d3' },
  { name: 'Banana', hex: '#fffebe' },
  { name: 'Gray', hex: '#708496' },
  { name: 'Tan', hex: '#928776' },
  { name: 'Coral', hex: '#ec7578' },
]

export const getColorHex = (name) =>
  COLORS.find((color) => color.name === name)?.hex ?? '#708496'

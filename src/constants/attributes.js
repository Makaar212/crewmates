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

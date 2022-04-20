export const NAMES = ['Jame', 'Critial Ronaldo', 'Bonds', 'Jessica'];

export const shuffle = () => {
  const index = Math.floor(Math.random() * (NAMES.length - 1));

  return NAMES[index];
}

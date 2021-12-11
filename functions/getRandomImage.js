const imagesList = [
  '/eastern-mole.png',
  '/javascript-logo.png',
  '/react-logo.png',
  '/nextjs-logo.png',
  '/tailwind-css-logo.png',
];

const getRandomImage = () => {
  return imagesList[Math.floor(Math.random() * (imagesList.length - 0)) + 0]
};

export default getRandomImage;
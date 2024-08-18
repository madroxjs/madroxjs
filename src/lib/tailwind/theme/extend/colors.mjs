const desiredShades = {
    '50': 'lightest',
    '200': 'lighter',
    '300': 'light',
    '500': 'DEFAULT',
    '600': 'dark',
    '700': 'darker',
    '900': 'darkest'
};

const tokenize = (color) => Object.fromEntries(
    Object.entries(color)
      .filter(([shade]) => Object.keys(desiredShades).includes(shade))
      .map(([shade, value]) => [desiredShades[shade], value])
  );
  

export default ({ colors }) => ({
    error: tokenize(colors.red),
    warning: tokenize(colors.yellow),
    success: tokenize(colors.green),
    brand: tokenize(colors.emerald),
    links: tokenize(colors.amber),
    info: tokenize(colors.blue),
    gray: tokenize(colors.coolGray),
    slate: tokenize(colors.blueGray),
    neutral: tokenize(colors.trueGray)
  })
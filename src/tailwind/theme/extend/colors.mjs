const desiredShades = {
    '50': 'lightest',
    '200': 'lighter',
    '300': 'light',
    '500': 'DEFAULT',
    '600': 'dark',
    '700': 'darker',
    '900': 'darkest'
};

export const semanticNames = {
  green: 'brand',
  yellow: 'links',
  neutral: 'neutral',
  slate: 'slate',
  gray: 'gray',
  red: 'error',
  amber: 'warning',
  emerald: 'success',
  blue: 'info',
}

const tokenize = (color) => Object.fromEntries(
    Object.entries(color)
      .filter(([shade]) => Object.keys(desiredShades).includes(shade))
      .map(([shade, value]) => [desiredShades[shade], value])
  );
  

export default ({ colors }) => ({
    error: tokenize(colors.red),
    warning: tokenize(colors.yellow),
    success: tokenize(colors.green),
    info: tokenize(colors.blue),
    gray: tokenize(colors.coolGray),
    slate: tokenize(colors.blueGray),
    neutral: tokenize(colors.trueGray)
  })
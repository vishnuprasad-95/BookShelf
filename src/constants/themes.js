import Color from 'color';

const baseTheme = {
  transitionTime: '0.3s',
  primaryColor: Color('#00a1ff'),
  foregroundColor: Color('#7d7d7d'),
  textColor: Color('#FFFFFF'),
}

const themes = {
  dark: {
    ...baseTheme,
  },
  light: {
    ...baseTheme,
  }
}

export const getTheme = (name) => {
  return themes[name || 'dark'];
};
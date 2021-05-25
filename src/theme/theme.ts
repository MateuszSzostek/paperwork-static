import { Colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    backgroundColor: string;
    elementColor: string;
    formColor: string;
  };
}

export const light: Theme = {
  colors: {
    primary: Colors.darkGray,
    secondary: Colors.lightGray,
    backgroundColor: Colors.lightViolet,
    elementColor: Colors.mediumViolet,
    formColor: Colors.veryLightViolet
  }
}
export const dark: Theme = {
  colors: {
    primary: Colors.lightGray,
    secondary: Colors.darkGray,
    backgroundColor: Colors.darkViolet,
    elementColor: Colors.mediumViolet,
    formColor: Colors.veryLightViolet
  }
}

export type ThemeType = typeof light | typeof dark;
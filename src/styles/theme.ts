import { createTheme } from '@mui/material/styles';

import { colors } from './colors';
import { fonts } from './fonts';

const {
  primary_light,
  secondary_light,
  background_light,
  success_light,
  info_light,
  //dark
  background_dark,
  primary_dark,
  secondary_dark,
  tertiary_dark,
} = colors;

const { display, heading, subheading, caption, button } = fonts;
//Light Theme
export const lightTheme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_light,
      fontFamily: display,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_light,
      fontFamily: heading,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: subheading,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
      margin: '0',
      color: primary_light,
      fontFamily: heading,
    },
    body1: {
      fontFamily: heading,
      color: '#757575',
    },
    caption: {
      color: primary_light,
      fontFamily: caption,
    },
    button: {
      fontFamily: button,
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: primary_light,
    },
    secondary: {
      main: secondary_light,
    },
    success: {
      main: success_light,
    },
    info: {
      main: info_light,
    },
    background: {
      default: background_light,
    },
  },
});
export const darkTheme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_dark,
      fontFamily: display,
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      margin: '1rem 0',
      color: primary_dark,
      fontFamily: heading,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    h4: {
      fontSize: '1.0rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: subheading,
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    h6: {
      fontSize: '0.6rem',
      fontWeight: 500,
      margin: '0',
      color: primary_dark,
      fontFamily: heading,
    },
    body1: {
      fontFamily: heading,
      color: tertiary_dark,
    },
    body2: {
      fontFamily: heading,
      color: tertiary_dark,
    },
    caption: {
      color: primary_dark,
      fontFamily: caption,
    },
    button: {
      fontFamily: button,
      fontWeight: 'bold',
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: primary_dark,
    },
    secondary: {
      main: secondary_dark,
    },
    success: {
      main: success_light,
    },
    info: {
      main: info_light,
    },
    background: {
      default: background_dark,
    },
  },
});

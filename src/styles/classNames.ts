import { makeStyles } from '@mui/styles';
import { colors } from './colors';
import { fonts } from './fonts';
const container_width_lg = '75%';
const container_width_md = '86%';
const container_width_sm = '90%';

const { background_variant_dark, background_variant_light } = colors;

//fonts
const { button } = fonts;
export const main_class = makeStyles((theme: any) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
    },
  },

  container: {
    width: container_width_lg,
    margin: '20px auto',
    //medium screen
    [theme.breakpoints.down('md')]: {
      width: container_width_md,
    },
    //small screen
    [theme.breakpoints.down('sm')]: {
      width: container_width_sm,
    },
  },
  btn: {
    width: 'max-content',
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '0.4rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: `2px solid ${theme.palette.primary.main}`,
    fontFamily: button,
    //small screen
    [theme.breakpoints.down('sm')]: {
      padding: '0.3rem 0.8rem',
    },
  },
  btn_contained: {
    //color: theme.palette.mode === 'light' ? text_light : text_dark,
    background: theme.palette.primary.main,
    transition: 'all 500ms ease',
    '&:hover': {
      background:
        theme.palette.mode === 'light'
          ? background_variant_light
          : background_variant_dark,
      color: theme.palette.primary.main,
    },
  },
  btn_outlined: {
    color: theme.palette.primary.main,
    background: 'transparent',
    transition: 'all 500ms ease',
    '&:hover': {
      background:
        theme.palette.mode === 'light'
          ? background_variant_dark
          : background_variant_light,
      borderColor: 'transparent',
      color:
        theme.palette.mode === 'light'
          ? background_variant_light
          : background_variant_dark,
    },
  },
}));

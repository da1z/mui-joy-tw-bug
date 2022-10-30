import { extendTheme as extendJoyTheme } from '@mui/joy/styles';
import { blue, grey } from '@mui/material/colors';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { deepmerge } from '@mui/utils';
import * as React from 'react';

// Material UI components
import Button from '@mui/material/Button';

// Icons

// Joy UI components
import MuiPaper from '@mui/material/Paper'; // This is a duplicate import to demonstrate that the Material UI Paper is not affected by the Joy theme
import type {} from '@mui/material/themeCssVarsAugmentation';
import MuiTypography from '@mui/material/Typography'; // This is a duplicate import to demonstrate that the Material UI Typography is not affected by the Joy theme

const muiTheme = extendMuiTheme();

const joyTheme = extendJoyTheme({
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...blue,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg:
            'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        neutral: {
          ...grey,
        },
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(0 0 0 / 0.56)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          ...blue,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg:
            'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        neutral: {
          ...grey,
        },
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(255 255 255 / 0.5)',
        },
      },
    },
  },
  fontFamily: {
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
  },
});

const Demo = () => {
  const [withJoy, setWithJoy] = React.useState(false);
  return (
    <CssVarsProvider theme={withJoy ? deepmerge(joyTheme, muiTheme) : muiTheme}>
      <Button onClick={() => setWithJoy((prev) => !prev)} variant="outlined">
        Toggle Css Provider
      </Button>
      <MuiPaper className="text-red-400">
        <MuiTypography>
          className="text-red-400"
          {withJoy ? 'Joy and Mui css applied' : 'Only mui css applied'}
        </MuiTypography>
      </MuiPaper>
    </CssVarsProvider>
  );
};

export default Demo;

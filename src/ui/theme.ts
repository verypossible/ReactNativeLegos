import { Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const theme = {
  button: {
    height: {
      default: 48,
      small: 32
    },
    activeOpacity: 0.9
  },

  color: {
    primary: 'rgb(29, 21, 237)',
    white: 'rgb(255,255,255)'
  },

  font: {
    size: {
      small: 13,
      default: 15,
      large: 17,
      xl: 25
    },
    data: {
      regular: 'Menlo-Regular',
      bold: 'Menlo-Bold'
    },
    ui: {
      regular: 'Helvetica',
      bold: 'Helvetica-Bold'
    }
  },

  radius: {
    small: 2.25,
    med: 4.5,
    large: 9,
    xlarge: 12,
    xxlarge: 18
  },

  screen: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH
  },

  shadow: {
    bottom: '0px 15px 25px rgba(0,0,0,.05)',
    top: '0px -15px 25px rgba(0,0,0,.05)'
  },

  zIndex: {
    actionSheet: {
      content: 101,
      overlay: 100
    },
    header: 50,
    modal: 100,
    notification: 100,
    screen: 0
  }
};

export default theme;

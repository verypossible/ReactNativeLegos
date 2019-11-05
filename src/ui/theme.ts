import { Dimensions } from 'react-native'
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const theme = {
  button: {
    height: {
      default: 48,
      small: 32,
    },
    activeOpacity: 0.9,
  },

  font: {
    size: {
      small: 13,
      default: 15,
      large: 17,
      xl: 25,
    },
    data: {
      regular: 'Menlo-Regular',
      bold: 'Menlo-Bold',
    },
    ui: {
      regular: 'Helvetica',
      bold: 'Helvetica-Bold',
    },
  },

  screen: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },

  zIndex: {
    actionSheet: {
      content: 101,
      overlay: 100,
    },
    header: 50,
    modal: 100,
    screen: 0,
  },
}

export default theme

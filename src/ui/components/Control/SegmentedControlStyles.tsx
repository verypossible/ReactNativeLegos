import { StyleSheet } from 'react-native';
import theme from 'ui/theme';

const SegmentedControlStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.white,
    padding: 10
  },
  tabStyle: {
    borderColor: theme.color.primary
  },
  tabTextStyle: {
    color: theme.color.primary,
    fontFamily: theme.font.ui.regular,
    borderColor: theme.color.primary
  },
  activeTabStyle: {
    backgroundColor: theme.color.primary,
    fontFamily: theme.font.ui.bold
  },
  activeTabTextStyle: {
    fontFamily: theme.font.ui.bold
  }
});

export default SegmentedControlStyles;

import SegmentedControlTab from 'react-native-segmented-control-tab';
import React from 'react';
import SegmentedControlStyles from './SegmentedControlStyles';
import { ThemeColors } from 'react-navigation';
import theme from 'ui/theme';

interface SegmentedControlProps {
  values?: any;
  selectedIndex?: number;
  enabled?: boolean;
  borderRadius?: number;
  tabsContainerStyle?: any;
  tabStyle?: any;
  firstTabStyle?: any;
  lastTabStyle?: any;
  tabTextStyle?: any;
  activeTabStyle?: any;
  activeTabTextStyle?: any;
  allowFontScaling?: any;
  onTabPress?: () => void;
}

interface SegmentedControlState {
  selectedIndex: number;
}

class SegmentedControl extends React.Component<
  SegmentedControlProps,
  SegmentedControlState
> {
  constructor(props: SegmentedControlProps) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  handleSingleIndexSelect = (index: number) => {
    this.setState(prevState => ({ ...prevState, selectedIndex: index }));
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <SegmentedControlTab
        values={this.props.values}
        selectedIndex={selectedIndex}
        onTabPress={this.handleSingleIndexSelect}
        borderRadius={theme.radius.med}
        tabStyle={SegmentedControlStyles.tabStyle}
        tabTextStyle={SegmentedControlStyles.tabTextStyle}
        activeTabStyle={SegmentedControlStyles.activeTabStyle}
        activeTabTextStyle={SegmentedControlStyles.activeTabTextStyle}
      ></SegmentedControlTab>
    );
  }
}

export default SegmentedControl;

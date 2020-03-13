import SegmentedControlIOS from '@react-native-community/segmented-control';
import React from 'react';

interface SegmentedControlProps {
  values?: any;
  selectedIndex?: number;
  style?: any;
  momentary?: any;
  enabled?: any;
  tintColor?: any;
  backgroundColor?: any;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  values,
  selectedIndex,
  style,
  momentary,
  enabled,
  tintColor,
  backgroundColor
}) => {
  return (
    <SegmentedControlIOS
      values={values}
      selectedIndex={selectedIndex}
      style={style}
      momentary={momentary}
      enabled={enabled}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
    />
  );
};

export default SegmentedControl;

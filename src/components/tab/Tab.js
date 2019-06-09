// @Vendors
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

// @Styles
import styles from './styles';

const Tab = ({
  activeColor, 
  customTabActiveIndicatorStyle,
  customTabActiveTextStyle,
  customTabContainerStyle,
  customTabInactiveTextStyle,
  inactiveColor, 
  isActive, 
  onSelect, 
  tabIndex, 
  title
}) => {
  const onPressTab = () => {
    if(!isActive) {
      onSelect(tabIndex);
    }
  }

  const buildActiveBorder = () => (
    isActive ? <View style={[styles.activeIndicator, customTabActiveIndicatorStyle]} /> : null
  );

  return (
    <TouchableWithoutFeedback
      onPress={onPressTab}>
      <View 
        style={[
          styles.mainContainer, 
          isActive ? { backgroundColor: activeColor } : { backgroundColor: inactiveColor },
          customTabContainerStyle
        ]}>
        <Text 
          style={[
            styles.tabTitle,
            customTabInactiveTextStyle,
            isActive && [styles.tabTitleActive, customTabActiveTextStyle]
          ]}>{title}</Text>
        { buildActiveBorder() }
      </View>
    </TouchableWithoutFeedback>
  );
}

Tab.propTypes = {
  activeColor: PropTypes.string.isRequired,
  customTabActiveIndicatorStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabActiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabContainerStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabInactiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  inactiveColor: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

Tab.defaultProps = {
  customTabActiveIndicatorStyle: undefined,
  customTabActiveTextStyle: undefined,
  customTabContainerStyle: undefined,
  customTabInactiveTextStyle: undefined
}

export default Tab;
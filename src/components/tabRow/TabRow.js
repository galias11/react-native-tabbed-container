// @Vendors
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// @Components
import Tab from '../tab/Tab';

// @Styles
import styles from './styles';

const TabRow = ({
  activeRowColor, 
  customContainerStyle,
  customTabActiveIndicatorStyle,
  customTabActiveTextStyle,
  customTabContainerStyle,
  customTabInactiveTextStyle,
  inactiveRowColor, 
  onSelectTab, 
  selectedIndex, 
  tabsData
}) => {
  const buildTabs = () => (
    tabsData.map((tab, index) => (
      <Tab 
        key={`tab-${index}`} // eslint-disable-line
        activeColor={activeRowColor}
        customTabActiveIndicatorStyle={customTabActiveIndicatorStyle}
        customTabActiveTextStyle={customTabActiveTextStyle}
        customTabContainerStyle={customTabContainerStyle}
        customTabInactiveTextStyle={customTabInactiveTextStyle}
        inactiveColor={inactiveRowColor}
        isActive={selectedIndex === index}
        onSelect={onSelectTab}
        tabIndex={index}
        title={tab.title}/>
    ))
  );

  return (
    <View style={[styles.mainContainer, customContainerStyle]}>
      { buildTabs() }
    </View>
  );
}

TabRow.propTypes = {
  activeRowColor: PropTypes.string.isRequired,
  customContainerStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabActiveIndicatorStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabActiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabContainerStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabInactiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  inactiveRowColor: PropTypes.string.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  tabsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired
}

TabRow.defaultProps = {
  customContainerStyle: undefined,
  customTabActiveIndicatorStyle: undefined,
  customTabActiveTextStyle: undefined,
  customTabContainerStyle: undefined,
  customTabInactiveTextStyle: undefined
}

export default TabRow;
// @Vendors
import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

// @Components
import TabRow from '../tabRow/TabRow';

// @Base styles
import { colors } from '../../styles/baseStyles';

// @Styles
import styles from './styles';

class TabbedContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = { selectedIndex: 0, containerWidth: undefined };
    this.handleChangeActiveTab = this.handleChangeActiveTab.bind(this);
    this.meassureContainer = this.meassureContainer.bind(this);
  }

  handleChangeActiveTab(index) {
    const { useSingleMountStrategy } = this.props;
    const { containerWidth } = this.state;
    if( !useSingleMountStrategy ) {
      this.scrollView.scrollTo({ x: index * containerWidth, animated: false });
    }
    this.setState({ selectedIndex: index });
  }

  meassureContainer({nativeEvent}) {
    this.setState({ containerWidth: nativeEvent.layout.width });
  }

  renderTabsContent() {
    const { tabsData } = this.props;
    const { containerWidth } = this.state;
    if(!containerWidth) {
      return <View />;
    }
    return tabsData.map((tab, index) => (
      <View 
        key={`content-${index}`} // eslint-disable-line
        style={[styles.tabContainer, { width: containerWidth }]}>
        { tab.content }
      </View>
    )) 
  }

  renderSingleTabContainer() {
    const { tabsData } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View 
        style={styles.singleTabContainer}>
        { tabsData[selectedIndex].content }
      </View>
    )
  }

  renderMultiTabContent() {
    return (
      <ScrollView
        ref={ref => { this.scrollView = ref}}
        contentContainerStyle={styles.contentContainer}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false} >
        { this.renderTabsContent() }
      </ScrollView>
    )
  }

  renderTabsRow() {
    const {
      activeColor, 
      customTabActiveIndicatorStyle,
      customTabActiveTextStyle,
      customTabHeaderContainerStyle,
      customTabInactiveTextStyle,
      customTabRowContainerStyle, 
      inactiveColor, 
      tabsData
    } = this.props;
    const { selectedIndex } = this.state;
    const tabsTitles = tabsData.map(tab => ({ title: tab.title }));
    return (
      <TabRow 
        activeRowColor={activeColor}
        customContainerStyle={customTabRowContainerStyle}
        customTabActiveIndicatorStyle={customTabActiveIndicatorStyle}
        customTabActiveTextStyle={customTabActiveTextStyle}
        customTabContainerStyle={customTabHeaderContainerStyle}
        customTabInactiveTextStyle={customTabInactiveTextStyle}
        inactiveRowColor={inactiveColor}
        onSelectTab={this.handleChangeActiveTab}
        selectedIndex={selectedIndex}
        tabsData={tabsTitles} />
    );
  }

  renderTopTabsRow() {
    const { useBottomTabs } = this.props;
    return !useBottomTabs ? this.renderTabsRow() : null;
  }

  renderBottomTabsRow() {
    const { useBottomTabs } = this.props;
    return useBottomTabs ? this.renderTabsRow() : null;
  }

  render() {
    const { useSingleMountStrategy } = this.props;
    return (
      <View 
        style={styles.mainContainer}
        onLayout={this.meassureContainer}>
        { this.renderTopTabsRow() }
        { useSingleMountStrategy ? this.renderSingleTabContainer() : this.renderMultiTabContent() }
        { this.renderBottomTabsRow() }
      </View>
    )
  }
}

TabbedContainer.propTypes = {
  activeColor: PropTypes.string,
  customTabActiveIndicatorStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabActiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabHeaderContainerStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabInactiveTextStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  customTabRowContainerStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.arrayOf(PropTypes.shape())]),
  inactiveColor: PropTypes.string,
  tabsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.shape()
  })).isRequired,
  useBottomTabs: PropTypes.bool,
  useSingleMountStrategy: PropTypes.bool
}

TabbedContainer.defaultProps = {
  activeColor: colors.backgroundActive,
  customTabActiveIndicatorStyle: undefined,
  customTabActiveTextStyle: undefined,
  customTabHeaderContainerStyle: undefined,
  customTabInactiveTextStyle: undefined,
  customTabRowContainerStyle: undefined,
  inactiveColor: colors.backgroundInactive,
  useBottomTabs: false,
  useSingleMountStrategy: false
}

export default TabbedContainer;
// @Vendors
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @Base styles 
import { fontSize, colors, padding, rowHeight } from './src/styles/baseStyles';

// @Components
import TabbedContainer from './src/components/tabbedContainer/TabbedContainer';

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbarPlaceholder}>
          <Text style={styles.titleText}> Tabbed container </Text>
        </View>
        <View style={styles.componentFrame}>
          <TabbedContainer
            activeColor={colors.backgroundActiveCustom}
            customTabRowContainerStyle={styles.rowContainer}
            customTabHeaderContainerStyle={styles.customTabContainer}
            customTabActiveIndicatorStyle={styles.activeIndicator}
            inactiveColor={colors.backgroundInactiveCustom}
            customTabActiveTextStyle={styles.activeText}
            customTabInactiveTextStyle={styles.inactiveText}
            tabsData={[
              { title: 'Tab 1', 
                content: (
                  <View style={styles.tabContent}> 
                    <Text>Tab 1 content</Text> 
                  </View> 
                )
              },
              { 
                title: 'Tab 2', 
                content: (
                  <View style={styles.tabContent}> 
                    <Text>Tab 2 content</Text> 
                  </View>
                )
              },
              { 
                title: 'Tab 3', 
                content: (
                  <View style={styles.tabContent}> 
                    <Text>Tab 3 content</Text> 
                  </View>
                )
              }
            ]} />
        </View>
        <View style={styles.bottomPlaceHolder}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: padding.mid
  },
  componentFrame: {
    flex: 1
  },
  tabContent: {
    flex: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbarPlaceholder: {
    paddingTop: padding.xLarge,
    height: 104,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomPlaceHolder: {
    height: 50
  },
  titleText: {
    fontSize: fontSize.xLarge,
    color: colors.fontActive
  },
  rowContainer: {
    height: rowHeight.xSmall,
  },
  customTabContainer: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: rowHeight.xSmall / 2,
    borderTopRightRadius: rowHeight.xSmall / 2
  },
  activeIndicator: {
    height: 2,
    alignSelf: 'center',
    marginBottom: 4,
    width: 60,
    backgroundColor: colors.indicatorColor
  },
  activeText: {
    fontWeight: '700',
    color: colors.fontActiveCustom
  },
  inactiveText: {
    color: colors.fontLight
  }
});

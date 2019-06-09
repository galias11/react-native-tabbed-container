# React native tabbed container

Simple RN tabbed view container. This is a fully customizable tabbed container to wrap multiple child views into a single container. **This is not a tab navigator**, it is a in-screen view container.

## Installation

No third party or native installation is required. Just run:

```
npm install --save react-native-tabbed-container
```

## Usage

Define a container to wrap the tabbed view container. This componen will aumatically cover all the space provided by the container view.

## Props & styling

| Prop        | Type           | Optional  | Description  |
| ------------- |:-------------:| :-----:|-----|
| activeColor   | String| Yes | Tab active background color. Default is #41db53 |
| customTabActiveIndicatorStyle   | Style | Yes | Indicator element custom style. Default is set to show a white bar on the bottom of the tab. |
| customTabActiveTextStyle   | Style | Yes | Custom text style for active tab. Default is undefined. |
| customTabHeaderContainerStyle   | Style | Yes | Custom container style for tabs. Default is undefined. |
| customTabInactiveTextStyle   | Style | Yes | Custom text style for inactive tab. Default is undefined. |
| customTabRowContainerStyle   | Style | Yes | Custom style for the tabs row container. Defuault is undefined. |
| inactiveColor   | String | Yes | Custom background color for inactive tab. Default is #258e33. |
| tabsData   | Array | No | Tabs data. This is an array of objects with two elements: **title** and **content**. Title is a string with the text to be displayed on the tab and content is the view or element to be rendered inside the current tab. It is recommended to use a reasonable amount of tabs. |  
| useBottomTabs   | bool | Yes | If enabled, tabs will be shown at the bottom of the container. Default is false. |
| useSingleMountStrategy   | bool | Yes | If enabled, all tabs will be rendered at the same time. Otherwise, tabs content will be mounted and unmounted each time the tab is entered or left. Default is true. |

## Example

```
// @Vendors
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabbedContainer from 'react-native-tabbed-container';

// @Base styles 
import { fontSize, colors, padding, rowHeight } from './src/styles/baseStyles';

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
```

This will result in:

![Android](https://github.com/galias11/react-native-tabbed-container/raw/master/scr-android.png "Android screen shot")
![IOS](https://github.com/galias11/react-native-tabbed-container/raw/master/scr-ios.png "IOS screen shot")


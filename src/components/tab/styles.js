// @Vendors
import { StyleSheet } from 'react-native';

// @Base styles
import { colors, fontSize } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.backgroundPrimary,
    height: 5,
    width: '100%'
  },
  tabTitle: {
    fontSize: fontSize.large,
    color: colors.fontInactive
  },
  tabTitleActive: {
    color: colors.fontLight,
    fontWeight: 'bold'
  }
});

export default styles;
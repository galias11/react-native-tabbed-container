// @Vendors
import { StyleSheet } from 'react-native';

// @Base styles
import { colors } from '../../styles/baseStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: colors.backgroundPrimary
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  tabContainer: {
    height: '100%'
  },
  singleTabContainer: {
    flex: 1
  }
});

export default styles;
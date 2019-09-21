import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 20,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  backBtn:{width: 30, height: 20, marginLeft: 20},
  menuBtn : {width: 30, height: 30},
  RightContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  RightIcons: {
    width: 30, height: 30
  },


});

export default styles;
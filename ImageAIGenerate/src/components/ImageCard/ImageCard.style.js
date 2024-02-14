import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
    backgroundColor: 'white',
    marginTop: 50,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  image: {
    width: 350,
    borderRadius: 10,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 3 + 40,
  },
  search_container: {
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  button: {
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingBar:{
    width:0,
    height:8,
    backgroundColor:'#DE1B89',
    marginLeft:45,
  },
  loadingText:{
    fontSize:15,
    marginLeft:45,
  }
});


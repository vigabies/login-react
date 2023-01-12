import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  Principal: {
    flex: 1,
    backgroundColor: '#c1e8e7',
    paddingTop: '5%',
  },

  Cor: {
    backgroundColor: '#F0F8FF',
    marginBottom: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 10,
    flexDirection: 'row',
  },

  Text: {
    marginLeft: '10%',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: '2%',
    marginLeft: '2%',
    marginBottom: '2%',
  },

  delet: {
    backgroundColor: '#5e0707',
    justifyContent: 'space-around',
    margin: '5%',
    marginLeft: '15%',
    marginRight: '15%',
    borderRadius: 20,
    height: '5%',
    borderWidth: 1,
    borderColor: '#7a4851',
  },

  textdel: {
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
  },
});

export default Styles;

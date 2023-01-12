//StyleSheet - tudo estilo
import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F0F0D6',
  },

  Title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginTop: '3%',
    marginBottom: '3%',
    color: '#1A3662',
    fontWeight: '600',
  },

  Info: {
    backgroundColor: '#D9C1B6',
    justifyContent: 'space-around',
    margin: '5%',
    borderRadius: 10,
    height: '8%',
    marginLeft: '15%',
    marginRight: '15%',
    borderWidth: 1,
    borderColor: '#BC8F8F',
  },

  Text: {
    textAlign: 'center',
    fontWeight: '500',
  },

  Input: {
    backgroundColor: '#B6D9D5',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '3%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#5F9EA0',
  },

  TextInfo: {
    marginLeft: '3%',
    marginBottom: '2%',
    fontWeight: '400',
  },
});

export default Styles;

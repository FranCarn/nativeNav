import {StyleSheet} from 'react-native';
export const colors = {
  primary: '#5856D6',
};
export const styles = StyleSheet.create({
  globalMargin: {marginHorizontal: 20},
  title: {fontSize: 30, marginBottom: 10, color: '#000'},
  bigBtn: {
    width: 100,
    height: 100,
    backgroundColor: '#FF9427',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  bigBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  menuBtn: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 15,
  },
});

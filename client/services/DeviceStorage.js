import AsyncStorage from '@react-native-async-storage/async-storage'


const DeviceStorage = {
  async saveKey(valueToSave) {
    try {
      await AsyncStorage.setItem('user_token', valueToSave);
    } catch (error) {
      console.log('AsyncStorage Error: ', error);
    }
  },
  async get() {
    try{
      const token = await AsyncStorage.getItem('user_token')
      return token
    }
    catch (err){
      console.log('AsyncStorage Error:' , error);
    }
  },

  async load() {
    try {
      const value = await AsyncStorage.getItem('user_token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error:' , error);
    }
  },

  async delete() {
    try{
      await AsyncStorage.removeItem('user_token')
      .then(
        () => {
          this.setState({
            jwt: ''
          })
        }
      );
    } catch (error) {
      console.log('AsyncStorage Error: ', error);
    }
  }
};

export default DeviceStorage;

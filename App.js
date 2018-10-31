import React from 'react';
import { StyleSheet, 
        Text, 
        View,
        Image,
        TextInput,
        TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}} 
          source={
            {
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png'
            }
          }
        />
        <TextInput 
          style={
            {
              width: '90%',
              fontSize: 18,
              height: 45,
              borderRadius: 20,
              paddingLeft: 10,
              borderWidth: 1,
              borderColor: '#ccc'
            }
          }
          placeholder="Nhập tài khoản/Email"
          value=""/>
          <TextInput 
          style={
            {
              marginTop: 10,
              width: '90%',
              fontSize: 18,
              height: 45,
              borderRadius: 20,
              paddingLeft: 10,
              borderWidth: 1,
              borderColor: '#ccc'
            }
          }
          secureTextEntry={true}
          placeholder="Mật khẩu"
          value=""/>
          <TouchableOpacity
             style={
              {
                borderRadius: 20,
                marginTop: 10,
                width: 300,
                height: 45,
                backgroundColor: '#DDDDDD',
                alignItems: 'center',
                justifyContent: 'center'
              }
             }
             >
             <Text> Login </Text>
           </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

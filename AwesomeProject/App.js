/**
 * Author: dong mei mei
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Greeting from './src/views/Greeting'
import Blink from './src/components/Blink'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        let pic = {
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text)=>this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((world) => world && '🍕').join(' ')}
                </Text>
                <Button onPress={()=>{
                    Alert.alert("你点击了按钮！");
                }}
                title="点我！"
                />
            </View>
        );
  }
}

const styles = StyleSheet.create({
  welcome: {
      flex: 1,
      // flexDirection: 'row'
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
  }
});

import React, {Component} from 'react';
import {Text, View} from "react-native";

export default class Greeting extends Component {
    render() {
        return (
            <View style={{alignItem:'center', marginTop: 50}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        )
    }
}


import React, {Component} from 'react';
import { Text, View } from 'react-native'

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingText: true
        };
        //每1000毫秒修改一次状态
        setInterval(()=>{
            this.setState(previousState => {
               return {
                   isShowingText: !previousState.isShowingText
               }
            });
        }, 500)
    }


    render() {
        return(
            <Text>{ this.state.isShowingText?this.props.text:'' }</Text>
        )
    }
}


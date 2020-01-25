import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  state = {
    msg: "",
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config: Config = {
    navigationBarTitleText: '首页'
  }

  // ------------- function -------------

  onBtnClick() {
    this.setState({
      msg: '点我干啥子！'
    })
  }

  // ------------- function -------------

  render() {
    return (
      <View className='index'>
        <Text className='red-text'>--- Hello world ---</Text>
        <Text>{this.state.msg}</Text>
        <Button onClick={this.onBtnClick}>
          点我啊
          </Button>
      </View>
    )
  }
}

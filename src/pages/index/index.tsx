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

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  // TODO: 页面的配置只能设置 全局配置 中部分 window 配置项的内容，页面中配置项会覆盖 全局配置 的 window 中相同的配置项
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

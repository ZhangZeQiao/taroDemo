import Taro, { Component, Config } from '@tarojs/taro'
// TODO: 寻址目前这样写没问题
import { Clock } from '../../components/Clock'

export default class Mine extends Component {

  config: Config = {
    navigationBarTitleText: '我的'
  }

  render() {
    return (
      <Clock />
    )
  }
}

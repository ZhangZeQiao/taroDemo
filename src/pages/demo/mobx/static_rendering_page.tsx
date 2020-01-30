import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import { isUsingStaticRendering, useStaticRendering } from '@tarojs/mobx'

interface IState {
  msg: string
}

export default class StaticRenderingPage extends Component<{}, IState> {

  state = {
    msg: isUsingStaticRendering().toString()
  }

  config: Config = {
    navigationBarTitleText: 'StaticRendering 示例'
  }

  useStaticRenderingToValue(value) {
    // 服务端渲染状态设置（该状态为全局状态）。
    useStaticRendering(value)
    this.setState({
      msg: isUsingStaticRendering().toString()
    })
  }

  render() {
    // 判断是否开启了服务端渲染（该状态为全局状态）。
    if (isUsingStaticRendering()) {
      return (
        <View>
          <View>{this.state.msg}</View>
          <Button onClick={this.useStaticRenderingToValue.bind(this, false)}>服务端渲染状态置为false</Button>
        </View>
      )
    }
    return (
      <View>
        <View>{this.state.msg}</View>
        <Button onClick={this.useStaticRenderingToValue.bind(this, true)}>服务端渲染状态置为true</Button>
      </View>
    )
  }
}

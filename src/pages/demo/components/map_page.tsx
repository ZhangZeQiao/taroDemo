import Taro, { Component, Config } from '@tarojs/taro'
import { Map } from '@tarojs/components'

export default class MapPage extends Component {

  config: Config = {
    navigationBarTitleText: '地图'
  }

  // TODO: 点进去Map的源代码可以查看相关属性介绍
  render() {
    return (
      <Map
        longitude={113.23}
        latitude={23.16}
        scale={8}
      />
    )
  }
}

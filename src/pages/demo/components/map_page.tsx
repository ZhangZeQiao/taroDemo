import Taro, { Component, Config } from '@tarojs/taro'
import { Map, ScrollView, Button } from '@tarojs/components'

export default class MapPage extends Component {

  config: Config = {
    navigationBarTitleText: '地图'
  }

  getLocation() {
    // TODO: 同wx.getLocation(Object object) 调用前需要 用户授权 scope.userLocation，h5端仅支持微信公众号（API以小程序为准）
    // 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
    // 开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
    // type	string	wgs84	否	wgs84 返回 gps 坐标
    Taro.getLocation({
      type: 'wgs84',
      /* success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      } */
    }).then((res) => console.log(
      'res.latitude:' + res.latitude + '   res.longitude:' + res.longitude + '   res.speed:' + res.speed + '   res.accuracy:' + res.accuracy)
    )
  }

  openLocation() {
    // TODO: 同wx.openLocation(Object object)使用微信内置地图查看位置，h5端仅支持微信公众号（API以小程序为准）
    Taro.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        Taro.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    }).then((res) => console.log(
      'res.latitude:' + res.latitude + '   res.longitude:' + res.longitude + '   res.speed:' + res.speed + '   res.accuracy:' + res.accuracy)
    )
  }

  chooseLocation() {
    // TODO: 同wx.chooseLocation(Object object)调用前需要用户授权 scope.userLocation，打开地图选择位置。
    // chooseLocation api功能是依赖于腾讯位置服务，所以需要使用 api 密钥。如果您没有，可以前往腾讯位置服务开发者控制台进行申请。
    // 获得 api 密钥后，您需要将它填入项目的常量配置defineConstants.LOCATION_APIKEY中：
    /*
    // config/index.js
      const config = {
        defineConstants: {
          LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')
        },
        // ...
      }
    */
    Taro.chooseLocation({}).then((res) => console.log(
      'res.latitude:' + res.latitude + '   res.longitude:' + res.longitude + '   res.speed:' + res.speed + '   res.accuracy:' + res.accuracy)
    )
  }

  // TODO: 点进去Map的源代码可以查看相关属性介绍
  render() {
    return (
      <ScrollView>
        <Map
          longitude={113.23}
          latitude={23.16}
          scale={8}
        />
        <Button onClick={this.getLocation}>getLocation</Button>
        <Button onClick={this.openLocation}>openLocation</Button>
        <Button onClick={this.chooseLocation}>chooseLocation</Button>
      </ScrollView>
    )
  }
}

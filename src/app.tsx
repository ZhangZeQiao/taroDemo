import Taro, { Component, Config } from '@tarojs/taro'

// TODO: MobX Demo
import { onError, Provider } from '@tarojs/mobx'
import counterStore from './pages/demo/mobx/store/counter'

import Index from './pages/index'
import './app.scss'

// Mobx 异常监听
onError(error => {
  console.log('mobx global error listener:', error)
})

const store = {
  counterStore
}

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/demo/demo',
      'pages/demo/components/view_page',
      'pages/demo/components/base_page',
      'pages/demo/components/form_page',
      'pages/demo/components/media_page',
      'pages/demo/components/map_page',
      'pages/demo/components/webview_page',
      'pages/demo/api/interaction_page',
      'pages/demo/api/navigate_page',
      'pages/demo/api/navigation_page',
      'pages/demo/api/open_page',
      'pages/demo/net/net_demo_page',
      'pages/demo/net/websocket_page',
      'pages/demo/mobx/mobx_demo_page',
      'pages/demo/mobx/use_as_observable_source_page',
      'pages/demo/mobx/use_context_page',
      'pages/demo/mobx/use_local_store_page',
      'pages/demo/mobx/class_page',
      'pages/demo/mobx/static_rendering_page',
      'pages/mine/mine'
    ],
    // 微信小程序接口权限相关设置，微信客户端 7.0.0 及以上版本支持
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于小程序位置接口的效果展示'
      }
    },
    // 申明需要后台运行的能力，类型为数组。目前支持以下项目：audio: 后台音乐播放
    requiredBackgroundModes: ['audio'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#f00',
      backgroundColor: '#f0f0f0',
      position: 'bottom',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'index',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        },
        {
          pagePath: 'pages/demo/demo',
          text: 'demo',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: 'mine',
          iconPath: './assets/images/taro_logo_white.png',
          selectedIconPath: './assets/images/taro_logo.png'
        }
      ]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  /* TODO: MobX全局 store 设置：Provider
      Provider 必须作用于入口文件（即：src/app.js），在其他地方使用无效。
      不支持嵌套，即全局只能存在一个 Provider。

      在 mobx-react 中，可通过以下方式设置 store：
      <Provider store1={xxxx} store2={xxxx}>
        <XXX />
      </Provider>
      而在 @tarojs/mobx 中，我们需要使用以下方式设置：
      const store = {
        store1: xxxx,
        store2: xxxx
      }
      <Provider store={store}>
        <XXX />
      </Provider>
  */
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

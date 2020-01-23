import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Demo extends Component {

    config: Config = {
        navigationBarTitleText: 'Demo'
    }

    /*
    TODO: 下面这样写会报错
    navigateTo(targetUrl: string) {
        Taro.navigateTo({ url: targetUrl })
    } 
    /<Button onClick={this.navigateTo('view/view_page')}>Demo</Button>
    */

    navigateToViewPage() {
        Taro.navigateTo({ url: 'components/view_page' })
    }

    navigateToBasePage() {
        Taro.navigateTo({ url: 'components/base_page' })
    }

    render() {
        return (
            <View>
                <Button onClick={this.navigateToViewPage}>视图容器</Button>
                <Button onClick={this.navigateToBasePage}>基础内容</Button>
            </View>
        )
    }


}
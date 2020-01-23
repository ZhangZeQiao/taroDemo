import Taro, { Component, Config } from "@tarojs/taro"
import { ScrollView, Audio, Text, Image, Video, View } from "@tarojs/components"

import logoImg from '../../../assets/images/taro_logo.png';

export default class MediaPage extends Component {

    config: Config = {
        navigationBarTitleText: '媒体组件'
    }

    render() {
        return (
            <ScrollView>

                <Text>《音频：Audio》</Text>
                <Audio
                    src='http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3'
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={true}
                    initialTime='30'
                    id='video'
                />

                <Text>《图片：Image》</Text>
                <Image
                    style='width: 300px;height: 100px;background: #f00;'
                    src={logoImg}
                />
                <Image
                    style='width: 300px;height: 100px;background: #fff;'
                    src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
                />

                <Text>《视频：Video》</Text>
                <Video
                    src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    controls={true}
                    autoplay={false}
                    poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                    initialTime='0'
                    id='video'
                    loop={false}
                    muted={false}
                />

                <Text>《系统相机：Camera》</Text>
                <View>\n</View>
                <Text>自行适配</Text>

            </ScrollView>
        )
    }
}
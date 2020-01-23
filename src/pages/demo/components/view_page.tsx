import Taro, { Component, Config } from '@tarojs/taro'
import { ScrollView, View, Text, Swiper, SwiperItem, MovableArea, MovableView, Video, CoverView, CoverImage } from '@tarojs/components'

export default class ViewPage extends Component {

  config: Config = {
    navigationBarTitleText: '视图容器'
  }

  render() {
    return (
      <ScrollView>

        <Text>《视图容器：View》</Text>
        <View className='components-page'>
          <Text>flex-direction: row 横向布局</Text>
          <View className='flex-wrp' style='flex-direction:row;'>
            <View className='flex-item demo-text-1'>1</View>
            <View className='flex-item demo-text-2'>1</View>
            <View className='flex-item demo-text-3'>1</View>
          </View>
          <Text>flex-direction: column 纵向布局</Text>
          <View className='flex-wrp' style='flex-direction:column;'>
            <View className='flex-item flex-item-V demo-text-1'>1</View>
            <View className='flex-item flex-item-V demo-text-2'>1</View>
            <View className='flex-item flex-item-V demo-text-3'>1</View>
          </View>
        </View>

        <Text>《滑块视图容器，轮播控件：Swiper》</Text>
        <Swiper current={1} circular autoplay interval={1000} indicatorDots indicatorColor='#0f0' indicatorActiveColor='#f00'>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>

        <Text>《可移动的视图容器，在页面中可以拖拽滑动：MovableArea》</Text>
        <MovableArea style='height: 200px; width: 200px; background: red;'>
          <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
        </MovableArea>

        <Text>《覆盖在原生组件之上的文本视图，可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher，只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button》</Text>
        <Video id='myVideo' src='src'>
          <CoverView>
            <CoverView>
              <CoverImage src='src' />
            </CoverView>
          </CoverView>
        </Video>
      </ScrollView>
    )
  }
}

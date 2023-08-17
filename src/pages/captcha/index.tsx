// 是否刷新
// 图片url
// 小卡片位置
import { View } from "@tarojs/components";
import { ReactNode, useState } from "react";
import './index.scss';

interface IvertifyProp {
  /**
   * @description: canvas宽度
   * @default 320
   */
  width: number;
  /**
   * @description: canvas高度
   * @default 160
   */
  height: number;
  /**
   * @description:滑块边长
   * @default 42
   */
  sliderLen: number;
  /**
   * @description: 滑块半径
   * @default 9
   */
  sliderRidius: number;
  /**
   * @description: 是否可见
   * @default true
   */
  visible: boolean;
  /**
   * @description: 滑块文本
   * @default 向右滑动填充平图
   */
  text: string | ReactNode;
}

export default ({
  width = 320,
  height = 160,
  l = 42,
  r = 9,
  imgUrl,
  text,
  refreshIcon = "http://yourimgsite/icon.png",
  visible = true,
  onSuccess,
  onFail,
  onRefresh,
}: IvertifyProp) => {
  function handleRefresh() {}
  const [sliderClass, setSliderClass] = useState('slider-container');
  const [textTip, setTextTip] = useState('123');
  return (
    <View className='vertify-wrap'>
      <View className='canvas-area' style={`width: ${width}px; height: ${height}px;`}>
        <canvas className='canvas' width={width} height={height}></canvas>
        <canvas className='canvas block' width={width} height={height}></canvas>
      </View>
      <View className={sliderClass}  style={`width: ${width}px;`}>
        <View className='slider-mask'>
          <View className='slider'>
            <View className='sliderIcon'>&rarr;</View>
          </View>
        </View>
        <View className='sliderText'>{textTip}</View>
      </View>
      <View className='refreshIcon' onClick={handleRefresh}></View>
      <View className='loadingContainer'>
        <View className='loadingIcon'></View>
        <span>加载中...</span>
      </View>
    </View>
  );
};

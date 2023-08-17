// 是否刷新
// 图片url
// 小卡片位置
import { ReactNode } from 'react';

interface IvertifyProp {
  /**
   * @description: canvas宽度
   * @default 320
   */
  width: number
  /**
  * @description: canvas高度
  * @default 160
  */
  height: number
  /**
  * @description:滑块边长
  * @default 42
  */
  sliderLen: number
  /**
  * @description: 滑块半径
  * @default 9
  */
  sliderRidius: number
  /**
  * @description: 是否可见
  * @default true
  */
  visible: boolean
  /**
  * @description: 滑块文本
  * @default 向右滑动填充平图
  */
  text:string | ReactNode
}

export default

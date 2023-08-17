// 是否刷新
// 图片url
// 小卡片位置
import { View } from "@tarojs/components";
import { ReactNode, useEffect, useState } from "react";
import "./index.scss";

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

function drawPuzzlePiece() {
  const imgDom = document.getElementById("image-area") as HTMLDivElement;
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  canvas.classList.add("puzzle-piece");
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  // ctx.fillStyle = "#000";
  // ctx.fillRect(10, 10, 150, 100);
  drawPath(ctx);

  imgDom.appendChild(canvas);
}
function drawPath(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  const PI = Math.PI;
  const r = 5;
  const l = 20;
  const x = 100;
  const y = 100;
  console.log(r, l, x, y);

  ctx.moveTo(x, y);
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
  ctx.lineTo(x + l, y);
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
  ctx.lineTo(x + l, y + l);
  ctx.lineTo(x, y + l);
  // anticlockwise为一个布尔值。为true时，是逆时针方向，否则顺时针方向
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
  ctx.lineTo(x, y);
  ctx.fillStyle = "rgba(0, 0, 255, 0.8)";
  ctx.strokeStyle = "rgba(0, 0, 255, 0.8)";
  // ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  // ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.stroke();
  ctx.globalCompositeOperation = 'destination-over'
    // 判断是填充还是裁切, 裁切主要用于生成图案滑块
    // operation === 'fill'? ctx.fill() : ctx.clip()
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
  const [sliderClass, setSliderClass] = useState("slider-container");
  const [textTip, setTextTip] = useState("123");
  useEffect(() => {
    drawPuzzlePiece();
  });

  return (
    <View className="vertify-wrap">
      <View className="canvas-area" id="image-area">
        <canvas className="canvas-1"></canvas>
        <canvas className="block canvas-2"></canvas>
      </View>
      <View className={sliderClass}>
        <View className="slider-mask">
          <View className="slider">
            <View className="sliderIcon">&rarr;</View>
          </View>
        </View>
        <View className="sliderText">{textTip}</View>
      </View>
      <View className="refreshIcon" onClick={handleRefresh}></View>
      <View className="loading-container">
        <View className="loadingIcon"></View>
        <span>加载中...</span>
      </View>
    </View>
  );
};

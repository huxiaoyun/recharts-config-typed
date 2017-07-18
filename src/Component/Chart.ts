interface Background {
  /**
	 * 边框宽
	 */
  stroke: string,
  /**
	 * 边框透明度
	 */
  strokeOpacity: number,
  /**
	 * 线宽
	 */
  lineWidth: number,
  /**
	 * 填充色
	 */
  fill: string,
  /**
	 * 填充透明度
	 */
  fillOpactiy: number,
  /**
	 * 半径
	 */
  radius: number
}

interface Chart {
  /**
	 * 类型
	 */
  type: string,
  /**
	 * 宽度
	 */
  width: number,
  /**
	 * 高度
	 */
  height: number,
  /**
	 * 边距
	 */
  margin: number[],
  /**
	 * 是否开启动画
	 */
  animate: boolean,
  /**
	 * 是否自适应
	 */
  forceFit: boolean,
  /**
	 * 背景
	 */
  background?: Background,
}

interface PolarChart extends Chart {
  /**
	 * 起始角度
	 */
  startAngle: number,
  /**
	 * 结束角度
	 */
  endAngle: number,
}

export { Chart, PolarChart };

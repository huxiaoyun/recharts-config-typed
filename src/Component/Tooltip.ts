enum crossHarisType {
  'x', 'y', 'cross',
}

interface crossHairs {
  /**
	 * 是否显示
	 */
  show: true,
  /**
	 * 对应轴线
	 */
  type: crossHarisType,
  /**
	 * 颜色
	 */
  stroke: string,
  /**
	 * 线宽
	 */
  lineWidth: number,
  /**
	 * 虚线样式
	 */
  lineDash: number[],
}

interface Tooltip {
  /**
	 * 字段名
	 */
  title: string,
  /**
	 * 偏移量
	 */
  offset?: number,
  /**
	 * 辅助线
	 */
  crossHairs?: crossHairs,
}

export default Tooltip;

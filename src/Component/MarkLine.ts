interface MarkLineLabel {
  /**
   * 提示信息
   */
  value: string,
  /**
   * 位置
   */
  position: string,
}

interface MarkLine {
  /**
   * 起始坐标
   */
  from: number[],
  /**
   * 结束坐标
   */
  to: number[],
  /**
   * 标签
   */
  label?: MarkLineLabel,
  /**
   * 颜色
   */
  stroke?: string,
  /**
   * 虚线样式
   */
  lineDash?: number[],
}

export default MarkLine;

type func = () => void
type formatterFunc = (val: number) => string | number

interface LegendLabel {
  /**
   * 格式化方法
   */
  formatter: formatterFunc,
  /**
   * 字体大小
   */
  fontsize: string,
  /**
   * 文本对齐方式
   */
  textalign: string,
  /**
   * 文本颜色
   */
  fill: string,
  /**
   * 文本粗细
   */
  fontweight: string,
  /**
   * 文本阴影模糊
   */
  shadowblur: number,
  /**
   * 文本阴影颜色
   */
  shadowcolor: string,
}

interface Legend {
  /**
   * x 轴 ID
   */
  xAxisId: string,
  /**
   * y 轴 ID
   */
  yAxisId: string,
  /**
   * z 轴 ID
   */
  zAxisId: string,
  /**
   * 数据 Key
   */
  dataKey: string,
  /**
   * 名字
   */
  name: string,
  /**
   * 类型
   */
  type?: string,
  /**
   * 形状
   */
  shape?: string | func,
  /**
   * 标签
   */
  label: LegendLabel,
}

export default Legend;

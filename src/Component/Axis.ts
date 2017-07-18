type formatterFunc = (val: number) => string | number

interface AxisTick {
  /**
   * 是否自定义
   * 如果自定义，读取 formatter, labelStyle 不生效
   */
  custom: boolean,
  /**
   * 格式化方法
   */
  formatter: formatterFunc,
  /**
   * 是否自动旋转
   * 不能指定角度
   */
  autoRotate: boolean,
  /**
   * 刻度数量
   */
  count: number,
  /**
   * 坐标轴刻度线的间距
   * tickCount 和 tickInterval 不可以同时声明,如果同时以tickInterval为准
   */
  interval: number,
  /**
   * 文本旋转角度
   */
  rotate: number,
  /**
   * 文本对齐方向
   */
  textAlign: string,
  /**
   * 文本颜色
   */
  fill: string,
  /**
   * 字体大小
   */
  fontSize: string,
  /**
   * 字体粗细
   */
  fontWeight: string,
}

interface AxisGrid {
  /**
   * 网格颜色
   */
  stroke: string,
  /**
   * 网格线宽
   */
  lineWidth: number,
  /**
   * 虚线
   */
  lineDash: number[],
}

interface AxisLabel {
  /**
   * 标签名
   */
  value: string,
  /**
   * 位置
   */
  position: string,
  /**
   * 字体大小
   */
  fontSize: string,
  /**
   * 文本对齐方式
   */
  textAlign: string,
  /**
   * 文本颜色
   */
  fill: string,
  /**
   * 格式化方法
   */
  formatter: formatterFunc,
  /**
   * 文本旋转角度
   */
  rotate: number,
}

interface AxisLine {
  /**
   * 线宽
   */
  lineWidth: number,
  /**
   * 线颜色
   */
  stroke: string,
  /**
   * 虚线
   */
  lineDash: number[]
}

interface AxisTickLine {
  /**
   * 线宽
   */
  lineWidth: number,
  /**
   * 线高
   */
  lineHeight: number,
  /**
   * 线颜色
   */
  stroke: string
}

interface Axis {
  /**
   * 序号
   */
  id: string,
  /**
   * 数据 Key
   */
  dataKey: string,
  /**
   * 定义域
   */
  domain?: {
    min: number,
    max: number,
  },
  /**
   * 位置
   */
  position?: string,
  /**
   * 刻度
   */
  tick?: AxisTick,
  /**
   * 网格
   */
  grid?: AxisGrid,
  /**
   * 标签
   */
  label?: AxisLabel,
  /**
   * 轴线
   */
  axisLine?: AxisLine,
  /**
   * 刻度线
   */
  tickLine?: AxisTickLine,
  /**
   * 是否需要轴反转
   */
  isReflect?: boolean,
}

export default Axis;

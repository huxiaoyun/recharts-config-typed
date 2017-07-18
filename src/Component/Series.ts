type func = () => void

export interface Series {
  /**
   * xAxis Id
   */
  xAxisId: string,
  /**
   * yAxis Id
   */
  yAxisId: string,
  /**
   * zAxis Id
   */
  zAxisId: string,
  /**
   * 名字
   */
  name: string,
  /**
   * 数据 Key
   */
  dataKey: string,
  /**
   * 类型
   */
  type?: string,
  /**
   * 形状
   */
  shape?: string | func,
}

export default Series;

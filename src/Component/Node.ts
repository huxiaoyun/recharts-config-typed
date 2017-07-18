interface Node {
  /**
   * 边框颜色
   */
  stroke: string,
  /**
   * 节点大小
   */
  size: string,
  /**
   * 节点类型
   */
  type: string,
  /**
   * 是否离散分布
   */
  merge: boolean,
  /**
   * 形状
   */
  shape: string,
  /**
   * 偏移量
   */
  offset: number,
  /**
   * 文字是否为放射状
   */
  labelEmit: boolean,
  /**
   * 节点边距
   */
  margin: number,
}

export default Node;

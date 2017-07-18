interface Edge {
  /**
	 * 源节点 Key
	 */
  sourceKey: string,
  /**
	 * 目标节点 Key
	 */
	targetKey: string,
  /**
	 * 数据 Key
	 */
	dataKey: string,
  /**
	 * 填充色
	 */
  fill?: string,
  /**
	 * 关系分类
	 */
  type?: string,
  /**
	 * 形状
	 */
  shape?: string,
}

export default Edge;

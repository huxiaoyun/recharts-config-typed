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
  fill: string,
}

export default Edge;

import { Chart } from './Component/Chart';
import Node from './Component/Node';
import Edge from './Component/Edge';

interface Relation {
  chart: Chart,
  data: object[],
  node: Node,
  edge: Edge,
}

export default Relation;

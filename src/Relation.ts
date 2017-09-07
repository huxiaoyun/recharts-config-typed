import { Chart } from './Component/Chart';
import Node from './Component/Node';
import Edge from './Component/Edge';
import Tooltip from './Component/Tooltip';

interface Relation {
  chart: Chart,
  data: {
    nodes: [any],
    edges: [any],
  },
  node: Node,
  edge: Edge,
  tooltip: ITooltip;
}

export default Relation;

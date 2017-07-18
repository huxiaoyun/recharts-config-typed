import Axis  from './Component/Axis';
import Brush from './Component/Brush';
import Tooltip from './Component/Tooltip';
import Legend from './Component/Legend';
import MarkLine from './Component/MarkLine';
import MarkPoint from './Component/MarkPoint';
import Series from './Component/Series';
import { Chart } from './Component/Chart';

interface CartesianChart {
  chart: Chart,
  data: object[],
  series: Series[],
  xAxis?: Axis[],
  yAxis?: Axis[],
  legend?: Legend,
  tooltip?: Tooltip,
  brush?: Brush,
  markLine?: MarkLine[],
  markPoint?: MarkPoint[]
}

import Axis  from './Component/Axis';
import Brush from './Component/Brush';
import Tooltip from './Component/Tooltip';
import Legend from './Component/Legend';
import MarkLine from './Component/MarkLine';
import MarkPoint from './Component/MarkPoint';
import Series from './Component/Series';
import { PolarChart as Chart } from './Component/Chart';

interface PolarChart {
  chart: Chart,
  data: object[],
  series: Series[],
  angleAxis?: Axis[],
  radiusAxis?: Axis[],
  legend?: Legend,
  tooltip?: Tooltip,
  brush?: Brush,
  markLine?: MarkLine[],
  markPoint?: MarkPoint[]
}

export default PolarChart;

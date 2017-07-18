import { Chart } from './Component/Chart';
import Series from './Component/Series';

interface Map {
  chart: Chart,
  data: object[],
  geo: object,
  series: Series,
}

export default Map;

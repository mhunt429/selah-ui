export interface MultilineChart {
  xAxisLabels: string[];
  series: SeriesData[];
}

export interface SeriesData {
  name: string;
  data: any[];
  color: string;
}

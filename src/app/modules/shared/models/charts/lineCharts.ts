export interface MultilineChart {
  xAxisLabels: string[];
  series: SeriesData[];
  title: string;
  subtitle: string;
}

export interface SeriesData {
  name: string;
  data: any[];
  color: string;
}

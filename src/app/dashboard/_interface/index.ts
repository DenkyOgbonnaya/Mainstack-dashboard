export type GraphView = Record<string, number>;
export interface Location {
  country: string;
  count: number;
  percent: number;
}

export interface Source {
  source: string;
  count: number;
  percent: number;
}

export interface DashboardResData {
  graph_data: {
    views: GraphView;
  };
  top_locations: Location[];
  top_sources: Source[];
}

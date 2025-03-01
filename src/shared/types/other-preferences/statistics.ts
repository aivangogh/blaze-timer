
type Statistic = {
  avarageTrim: number;
};

type Tables = {
	sessionStatsEnabled: boolean;
	todaysStatsEnabled: boolean;
};

export type Statistics = {
  statistics: Statistic;
	tables: Tables;
};

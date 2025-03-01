import { OtherPreferences } from "@/src/shared/types/other-preferences";

export const defaultOtherPreferences: OtherPreferences = {
  general: {
    tintNavigationBarEnabled: false,
    menuBackgroundEnabled: false,
  },
  statistics: {
    statistics: {
      avarageTrim: 0.05,
    },
    tables: {
      sessionStatsEnabled: true,
      todaysStatsEnabled: true
    }
  },
  list: {
    clearButtonEnabled: false
  }
};

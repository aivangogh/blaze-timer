
type Features = {
  scrambleImageEnabled: boolean;
  sessionStatsEnabled: boolean;
  sessionStatsForMo3Enabled: boolean;
  sessionStatsForAo1000Enabled: boolean;
  recentResultsEnabled: boolean;
  quickActionsButtonsEnabled: boolean;
  enlarageQuickActionsButtonsEnabled: boolean;
}

type Other = {
  hideTimeWhileSolvingEnabled: boolean;
  scrambleBackgroundEnabled: boolean;
  scrambleTextSize: number;
  showDecimalsEnabled: boolean;
}

type Advanced = {
  advancedSettingsEnabled: boolean;
  timerTextSize: number;
  scrambleImageSize: number;
}

export type TimerAppearance = {
  features: Features;
  other: Other;
  advanced: Advanced
}

import { AlertType } from "./alert-type";

type Control = {
  manualModeEnabled: boolean;
  startCueEnabled: boolean;
  holdToStartEnabled: boolean;
  backCancelsSolveEnabled: boolean;
}

type MultiPhase = {
  multiPhaseEnabled: boolean;
  numberOfPhases: number;
}

type Scramble = {
  generateScrambleEnabled: boolean;
  showHintsEnabled: boolean;
  facesShownOnHint?: unknown;
  showExtendedCrossHintsEnabled: boolean;
}

type Alerts = {
  bestTimeAlertEnabled: boolean;
  bestAverageAlertEnabled: boolean;
  worstTimeAlertEnabled: boolean;
  alertTimeLimitEnabled: boolean;
  alertType: AlertType;
}

type Other = {
  animationDuration: number;
}

export type TimeBehavior = {
  control: Control;
  multiPhase: MultiPhase;
  scramble: Scramble;
  alerts: Alerts;
  other: Other;
}

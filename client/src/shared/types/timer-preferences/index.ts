import { InspectionBehavior } from "./inspection-behavior";
import { StackTimer } from "./stack-timer";
import { TimerAppearance } from "./timer-appearance";
import { TimeBehavior } from "./timer-behavior";

export type TimerPreferences = {
  inspectionBehavior: InspectionBehavior;
  timeBehavior: TimeBehavior;
  timerAppearance: TimerAppearance;
  stackTimer: StackTimer;
};

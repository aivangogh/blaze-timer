import { type TimerPreferences } from "@/src/shared/types/timer-preferences";

export const defaultTimerPreferences: TimerPreferences = {
	inspectionBehavior: {
		inspection: {
			inspectionEnabled: false,
			inspectionDuration: 15,
		},
		alerts: {
			alertEnabled: false,
			alertType: "sound",
		},
	},
	timeBehavior: {
		control: {
			manualModeEnabled: false,
			startCueEnabled: false,
			holdToStartEnabled: false,
			backCancelsSolveEnabled: true,
		},
		multiPhase: {
			multiPhaseEnabled: false,
			numberOfPhases: 4,
		},
		scramble: {
			generateScrambleEnabled: false,
			showHintsEnabled: false,
			facesShownOnHint: undefined,
			showExtendedCrossHintsEnabled: false,
		},
		alerts: {
			bestTimeAlertEnabled: false,
			bestAverageAlertEnabled: false,
			worstTimeAlertEnabled: false,
			alertTimeLimitEnabled: false,
			alertType: "sound",
		},
		other: {
			animationDuration: 300,
		},
	},
	timerAppearance: {
		features: {
			scrambleImageEnabled: true,
			sessionStatsEnabled: true,
			sessionStatsForMo3Enabled: false,
			sessionStatsForAo1000Enabled: false,
			recentResultsEnabled: true,
			quickActionsButtonsEnabled: true,
			enlarageQuickActionsButtonsEnabled: false,
		},
		other: {
			hideTimeWhileSolvingEnabled: false,
			scrambleBackgroundEnabled: false,
			scrambleTextSize: 16,
			showDecimalsEnabled: false,
		},
		advanced: {
			advancedSettingsEnabled: false,
			timerTextSize: 16,
			scrambleImageSize: 16,
		},
	},
	stackTimer: {
		stackTimer: {
			stackTimerEnabled: true,
			showSerialStatusEnabled: true,
		},
		smartTimer: {
			smartTimerEnabled: true,
			showBluetoothStatusEnabled: true,
		},
		behavior: {
			inspectionStartByResetEnabled: true,
		},
	},
};

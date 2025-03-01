import { type TimerPreferences } from "@src/shared/types/timer-preferences";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultTimerPreferences } from "../config/prefenreces/timer";

type TimerPreferencesStore = {
	timerPreferences: TimerPreferences;
	setTimerPreferences: (timerPreferences: TimerPreferences) => void;
	resetToDefault: () => void;
};

export const useTimerPreferencesStore = create<TimerPreferencesStore>()(
	persist(
		(set) => ({
			timerPreferences: defaultTimerPreferences,
			setTimerPreferences: (timerPreferences: TimerPreferences) =>
				set({ timerPreferences }),
			resetToDefault: () => set({ timerPreferences: defaultTimerPreferences }),
		}),
		{ name: "timer-preferences" },
	),
);

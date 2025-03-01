import { type OtherPreferences } from "@src/shared/types/other-preferences";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultOtherPreferences } from "../config/prefenreces/other";

type OtherPreferencesStore = {
	otherPreferences: OtherPreferences;
	setOtherPreferences: (otherPreferences: OtherPreferences) => void;
	resetToDefault: () => void;
};

export const useOtherPreferencesStore = create<OtherPreferencesStore>()(
	persist(
		(set) => ({
			otherPreferences: defaultOtherPreferences,
			setOtherPreferences: (otherPreferences: OtherPreferences) =>
				set({ otherPreferences }),
			resetToDefault: () => set({ otherPreferences: defaultOtherPreferences }),
		}),
		{ name: "other-preferences" },
	),
);

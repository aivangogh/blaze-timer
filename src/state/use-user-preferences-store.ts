import { defaultUserPreferences } from "@src/config/prefenreces/user";
import { type UserPreferences } from "@src/shared/types/user-preferences";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserPreferencesStore = {
	userPreferences: UserPreferences;
	setUserPreferences: (userPreferences: UserPreferences) => void;
	resetToDefault: () => void;
};

export const useUserPreferencesStore = create<UserPreferencesStore>()(
	persist(
		(set) => ({
			userPreferences: defaultUserPreferences,
			setUserPreferences: (userPreferences: UserPreferences) =>
				set({ userPreferences }),
			resetToDefault: () => set({ userPreferences: defaultUserPreferences }),
		}),
		{ name: "user-preferences" },
	),
);

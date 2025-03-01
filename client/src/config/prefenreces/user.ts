import { type UserPreferences } from "@/src/shared/types/user-preferences";

export const defaultUserPreferences: UserPreferences = {
	theme: "light",
	notifications: true,
	locale: {
		language: "En",
		code: "en",
	},
	displayDensity: "compact",
};

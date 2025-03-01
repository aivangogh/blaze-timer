export type Theme = "light" | "dark" | "system";
export type Locale = {
	language: string;
	code: string;
};
export type DisplayDensity = "compact" | "comfortable" | "spacious";

export type UserPreferences = {
	theme: Theme;
	notifications: boolean;
	locale: Locale;
	displayDensity: DisplayDensity;
};

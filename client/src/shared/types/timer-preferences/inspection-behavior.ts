import { AlertType } from "./alert-type";

type Inspection = {
  inspectionEnabled: boolean;
	inspectionDuration: number;
};

type Alerts = {
	alertEnabled : boolean;
	alertType: AlertType;
};

export type InspectionBehavior = {
	inspection: Inspection;
	alerts: Alerts;
};

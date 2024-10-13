import { IAlert } from "@/interfaces/alerts.interfaces";
import { createContext } from "react";

interface AlertsContextProps {
    newAlert: (alert: IAlert) => Promise<unknown>
};

export const AlertsContext = createContext({ } as AlertsContextProps);
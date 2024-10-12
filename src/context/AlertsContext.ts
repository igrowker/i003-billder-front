import { IAlert } from "@/interfaces/alerts.interfaces";
import { createContext } from "react";

interface AlertsContextProps {
    newAlert: (newAlert: IAlert) => void;
};

export const AlertsContext = createContext({ } as AlertsContextProps);
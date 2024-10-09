import { ReactNode, useState } from 'react';
import { AlertsContext } from './AlertsContext';
import { createPortal } from 'react-dom';
import { IAlert, IAlertCreate } from '@/interfaces/alerts.interfaces';
import { FlotatingAlert } from '@/ui/components/alerts';



export const AlertsProvider = ({ children }: { children: ReactNode }) => {

    const [alerts, setAlerts] = useState<IAlertCreate[]>([])

    const newAlert = (alert: IAlert) => {
        const expirationAlert = 6 * 1000;
        const uniqueID = new Date().getTime();
        setAlerts([
            {
                id: uniqueID,
                message: alert.message,
                type: alert.type
            }
        ]);
        setTimeout(() => {
            setAlerts(alerts.filter(alert => alert.id !== uniqueID))
        }, expirationAlert)
    }


    return (
        <AlertsContext.Provider value={{
            newAlert
        }} >
            {
                createPortal(
                    <div className="fixed justify-end top-3 flex flex-col gap-3 z-[1500] right-2">
                        {
                            alerts.map((alert, index) => <FlotatingAlert key={index} message={alert.message} type={alert.type} />)
                        }
                    </div>,
                    document.body
                )
            }
            {children}
        </AlertsContext.Provider>
    )
}

import { ReactNode, useState } from 'react';
import { AlertsContext } from './AlertsContext';
import { createPortal } from 'react-dom';
import { IAlert, IAlertCreate } from '@/interfaces/alerts.interfaces';
import { FlotatingAlert } from '@/ui/components/alerts';



export const AlertsProvider = ({ children }: { children: ReactNode }) => {

    const [alerts, setAlerts] = useState<IAlertCreate[]>([])


    const newAlert = (alert: IAlert) => {
        return new Promise((resolve,) => {
            const expirationAlertTime = 4 * 1000;
            const uniqueID = Math.random().toString(36).substring(2, 15);
            setAlerts((prev) => [
                ...prev,
                {
                    type: alert.type,
                    message: alert.message,
                    id: uniqueID
                }
            ]
            );
            setTimeout(() => {
                setAlerts((prev) => {
                    const itemIndex = prev.findIndex(item => item.id === uniqueID);
                    if (itemIndex === -1) return prev;
                    return prev.toSpliced(itemIndex, 1);
                })
                resolve(true);
            }, expirationAlertTime)

        })
    }
   

    return (
        <AlertsContext.Provider value={{
            newAlert
        }} >
            {
                createPortal(
                    <div className="fixed justify-end top-3 flex flex-col gap-3 z-[1500] left-2 right-2">
                        {
                            alerts.map((alert) => <FlotatingAlert key={alert.id} message={alert.message} type={alert.type} />)
                        }
                    </div>,
                    document.body
                )
            }
            {children}
        </AlertsContext.Provider>
    )
}

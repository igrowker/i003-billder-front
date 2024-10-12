

export interface IAlert {
    
    message: string;
    type: IAlertType;
}
export interface IAlertCreate extends IAlert {
    id: number;
}
export type IAlertType = 'warning' | 'success' | 'info' | 'error';

export enum EnumAlertTypes  {
    Warning = 'warning',
    Success = 'success',
    Info = 'info',
    Error = 'error'
}
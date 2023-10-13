import React from 'react';
export interface AlertProps {
    /**
     * @description       属性描述
     * @default
     */
    children: any;
    kind?: 'info' | 'positive' | 'negative' | 'warning';
}
export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;

import { DeviceStatus } from "./deviceStatus";

export interface IWarrantyMapFactory {
    create: (
        moneyBackFunc: (action: () => void) => void,
        notOptFunc: (action: () => void) => void,
        circuitryFunc: (action: () => void) => void) => Map<DeviceStatus, (action: () => void) => void>;
}
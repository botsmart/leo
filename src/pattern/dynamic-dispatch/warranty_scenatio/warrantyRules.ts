import { IWarrantyMapFactory } from "./IWarrantyMapFactory";
import { DeviceStatus } from "./deviceStatus";
// export class WarrantyRules {
//     static getCommonRules(
//         claimMoneyBack: (action: () => void) => void,
//         claimNotOperational: (action: () => void) => void,
//         claimCircuirty: (action: () => void) => void): Map<DeviceStatus, (action: () => void) => void> {
//         return new Map([
//             [DeviceStatus.allFine(), claimMoneyBack],
//             [DeviceStatus.allFine().withVisibleDamage(), (action: () => void) => { }],
//             [DeviceStatus.allFine().notOperational().withVisibleDamage(), claimNotOperational],
//             [DeviceStatus.allFine().circuitryFaild(), claimNotOperational],
//             [DeviceStatus.allFine().circuitryFaild().withVisibleDamage(), claimCircuirty],
//             [DeviceStatus.allFine().circuitryFaild().withVisibleDamage().circuitryFaild(), claimNotOperational]
//         ]);
//     }
// }

/// forth step of refactoring
export class WarrantyRules implements IWarrantyMapFactory {
    create(
        claimMoneyBack: (action: () => void) => void,
        claimNotOperational: (action: () => void) => void,
        claimCircuirty: (action: () => void) => void): Map<DeviceStatus, (action: () => void) => void> {
        return new Map([
            [DeviceStatus.allFine(), claimMoneyBack],
            [DeviceStatus.allFine().withVisibleDamage(), (action: () => void) => { }],
            [DeviceStatus.allFine().notOperational().withVisibleDamage(), claimNotOperational],
            [DeviceStatus.allFine().circuitryFaild(), claimNotOperational],
            [DeviceStatus.allFine().circuitryFaild().withVisibleDamage(), claimCircuirty],
            [DeviceStatus.allFine().circuitryFaild().withVisibleDamage().circuitryFaild(), claimNotOperational]
        ]);
    }
}
import { IWarranty } from "./IWarranty";
import { DeviceStatus } from "./deviceStatus";
import { LimitedTimeWarranty } from "./limitedTimeWarranty";
import { Maybe } from "./maybe";
import { Part } from "./part";
import { VoidWarranty } from "./voidWarranty";

import { WarrantyRules } from "./warrantyRules";
import { IWarrantyMapFactory } from "./IWarrantyMapFactory";

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;
//     private NotOperationalWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     private circuitry: Maybe<Part> = Maybe.none<Part>();

//     private operatinalStatus: DeviceStatus;

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.NotOperationalWarranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;
//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         this.circuitry = Maybe.some(circuitry);
//         this.circuirtyWarranty = extendedWarranty;

//         this.operatinalStatus &= ~DeviceStatus.CircuitryFaild;

//     }

//     circuitryNotOperational(detected: Date) {
//         this.circuitry.do((c) => {
//             c.markDefective(new Date());
//             this.operatinalStatus |= DeviceStatus.CircuitryFaild;
//         });
//     }

//     visibleDamage() {
//         this.operatinalStatus |= DeviceStatus.VisibilityDamage;
//     }

//     notOperational() {
//         this.operatinalStatus |= DeviceStatus.NotOperational;
//     }

//     required() {
//         this.operatinalStatus &= ~DeviceStatus.NotOperational;
//     }

//     claimWarranty(action: () => void) {
//         switch (this.operatinalStatus) {
//             case DeviceStatus.AllFine:
//                 this.moneyBackGuarantee.claim(new Date(), action);
//             case DeviceStatus.NotOperational:
//             case DeviceStatus.NotOperational | DeviceStatus.VisibilityDamage:
//             case DeviceStatus.NotOperational | DeviceStatus.CircuitryFaild:
//             case DeviceStatus.NotOperational | DeviceStatus.CircuitryFaild | DeviceStatus.VisibilityDamage:
//                 this.NotOperationalWarranty.claim(new Date(), action);
//                 break;
//             case DeviceStatus.VisibilityDamage:
//                 break;
//             case DeviceStatus.CircuitryFaild:
//             case DeviceStatus.VisibilityDamage | DeviceStatus.CircuitryFaild:
//                 this.circuitry.do((c) => this.circuirtyWarranty.claim(c.defectDetectionDte, action));
//                 break;
//         }
//     }
// }

/// first step of refactoring

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;
//     private NotOperationalWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     private circuitry: Maybe<Part> = Maybe.none<Part>();

//     private operatinalStatus: DeviceStatus;

//     private readonly warrantyMap: Map<DeviceStatus, (action: () => void) => void> = this.initializeWarrantyMap();

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.NotOperationalWarranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;

//         this.operatinalStatus = DeviceStatus.allFine();
//     }

//     initializeWarrantyMap(): Map<DeviceStatus, (action: () => void) => void> {
//         return new Map([
//             [DeviceStatus.allFine(), this.claimMoneyBack],
//             [DeviceStatus.allFine().withVisibleDamage(), (action: () => void) => { }],
//             [DeviceStatus.allFine().notOperational().withVisibleDamage(), this.claimNotOperationalWarranty],
//             [DeviceStatus.allFine().circuitryFaild(), this.claimNotOperationalWarranty],
//             [DeviceStatus.allFine().circuitryFaild().withVisibleDamage(), this.claimCircuirtyWarranty],
//             [DeviceStatus.allFine().circuitryFaild().withVisibleDamage().circuitryFaild(), this.claimNotOperationalWarranty]
//         ]);
//     }

//     private claimMoneyBack(action: () => void): void {

//     }

//     private claimNotOperationalWarranty(action: () => void): void {

//     }

//     private claimCircuirtyWarranty(action: () => void): void {

//     }


//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         this.circuitry = Maybe.some(circuitry);
//         this.circuirtyWarranty = extendedWarranty;

//         // this.operatinalStatus &= ~DeviceStatus.CircuitryFaild;
//         this.operatinalStatus = this.operatinalStatus.circuitryReplaced();
//     }

//     circuitryNotOperational(detected: Date) {
//         this.circuitry.do((c) => {
//             c.markDefective(new Date());
//             // this.operatinalStatus |= DeviceStatus.CircuitryFaild;
//             this.operatinalStatus = this.operatinalStatus.circuitryFaild();
//         });
//     }

//     visibleDamage() {
//         // this.operatinalStatus |= DeviceStatus.VisibilityDamage;
//         this.operatinalStatus = this.operatinalStatus.withVisibleDamage();
//     }

//     notOperational() {
//         // this.operatinalStatus |= DeviceStatus.NotOperational;
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     required() {
//         // this.operatinalStatus &= ~DeviceStatus.NotOperational;
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     claimWarranty(onValidClaim: () => void) {
//         // switch (this.operatinalStatus) {
//         //     case DeviceStatus.AllFine:
//         //         this.moneyBackGuarantee.claim(new Date(), action);
//         //     case DeviceStatus.NotOperational:
//         //     case DeviceStatus.NotOperational | DeviceStatus.VisibilityDamage:
//         //     case DeviceStatus.NotOperational | DeviceStatus.CircuitryFaild:
//         //     case DeviceStatus.NotOperational | DeviceStatus.CircuitryFaild | DeviceStatus.VisibilityDamage:
//         //         this.NotOperationalWarranty.claim(new Date(), action);
//         //         break;
//         //     case DeviceStatus.VisibilityDamage:
//         //         break;
//         //     case DeviceStatus.CircuitryFaild:
//         //     case DeviceStatus.VisibilityDamage | DeviceStatus.CircuitryFaild:
//         //         this.circuitry.do((c) => this.circuirtyWarranty.claim(c.defectDetectionDte, action));
//         //         break;
//         // }

//         this.warrantyMap.get(this.operatinalStatus)(onValidClaim);
//     }
// }

// /// second step of refactoring
// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;
//     private NotOperationalWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     private circuitry: Maybe<Part> = Maybe.none<Part>();

//     private operatinalStatus: DeviceStatus;

//     // private readonly warrantyMap: Map<DeviceStatus, (action: () => void) => void> = this.initializeWarrantyMap();

//     private readonly warrantyMap: Map<DeviceStatus, (action: () => void) => void>;

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.NotOperationalWarranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;

//         this.operatinalStatus = DeviceStatus.allFine();

//         this.warrantyMap = WarrantyRules.getCommonRules(
//             this.claimMoneyBack,
//             this.claimNotOperationalWarranty,
//             this.claimCircuirtyWarranty
//         );
//     }

//     // initializeWarrantyMap(): Map<DeviceStatus, (action: () => void) => void> {
//     //     return new Map([
//     //         [DeviceStatus.allFine(), this.claimMoneyBack],
//     //         [DeviceStatus.allFine().withVisibleDamage(), (action: () => void) => { }],
//     //         [DeviceStatus.allFine().notOperational().withVisibleDamage(), this.claimNotOperationalWarranty],
//     //         [DeviceStatus.allFine().circuitryFaild(), this.claimNotOperationalWarranty],
//     //         [DeviceStatus.allFine().circuitryFaild().withVisibleDamage(), this.claimCircuirtyWarranty],
//     //         [DeviceStatus.allFine().circuitryFaild().withVisibleDamage().circuitryFaild(), this.claimNotOperationalWarranty]
//     //     ]);
//     // }

//     private claimMoneyBack(action: () => void): void {

//     }

//     private claimNotOperationalWarranty(action: () => void): void {

//     }

//     private claimCircuirtyWarranty(action: () => void): void {

//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         this.circuitry = Maybe.some(circuitry);
//         this.circuirtyWarranty = extendedWarranty;

//         this.operatinalStatus = this.operatinalStatus.circuitryReplaced();
//     }

//     circuitryNotOperational(detected: Date) {
//         this.circuitry.do((c) => {
//             c.markDefective(new Date());
//             this.operatinalStatus = this.operatinalStatus.circuitryFaild();
//         });
//     }

//     visibleDamage() {
//         this.operatinalStatus = this.operatinalStatus.withVisibleDamage();
//     }

//     notOperational() {
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     required() {
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     claimWarranty(onValidClaim: () => void) {
//         this.warrantyMap.get(this.operatinalStatus)(onValidClaim);
//     }
// }

/// third step of refactoring
// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;
//     private notOperationalWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     private circuitry: Maybe<Part> = Maybe.none<Part>();

//     private operatinalStatus: DeviceStatus;


//     private readonly warrantyMap: Map<DeviceStatus, (action: () => void) => void>;

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     constructor(moneyBackGuaranty: IWarranty,
//         expressGuaranty: IWarranty,
//         rulesFactory: (a: (action: () => void) => void, b: (action: () => void) => void, c: (action: () => void) => void) => Map<DeviceStatus, (action: () => void) => void>
//     ) {
//         this.notOperationalWarranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;

//         this.operatinalStatus = DeviceStatus.allFine();

//         // this.warrantyMap = WarrantyRules.getCommonRules(
//         //     this.claimMoneyBack,
//         //     this.claimNotOperationalWarranty,
//         //     this.claimCircuirtyWarranty
//         // );
//         this.warrantyMap = rulesFactory(
//             this.claimMoneyBack,
//             this.claimNotOperationalWarranty,
//             this.claimCircuirtyWarranty
//         );
//     }

//     private claimMoneyBack(action: () => void): void {
//         this.moneyBackGuarantee.claim(new Date(), action);
//     }

//     private claimNotOperationalWarranty(action: () => void): void {
//         this.notOperationalWarranty.claim(new Date(), action);
//     }

//     private claimCircuirtyWarranty(action: () => void): void {
//         this.circuirtyWarranty.claim(new Date(), action);
//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         this.circuitry = Maybe.some(circuitry);
//         this.circuirtyWarranty = extendedWarranty;

//         this.operatinalStatus = this.operatinalStatus.circuitryReplaced();
//     }

//     circuitryNotOperational(detected: Date) {
//         this.circuitry.do((c) => {
//             c.markDefective(new Date());
//             this.operatinalStatus = this.operatinalStatus.circuitryFaild();
//         });
//     }

//     visibleDamage() {
//         this.operatinalStatus = this.operatinalStatus.withVisibleDamage();
//     }

//     notOperational() {
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     required() {
//         this.operatinalStatus = this.operatinalStatus.notOperational();
//     }

//     claimWarranty(onValidClaim: () => void) {
//         this.warrantyMap.get(this.operatinalStatus)(onValidClaim);
//     }
// }

/// forth step of refactoring
export class SoldEquipment {

    private moneyBackGuarantee: IWarranty;
    private notOperationalWarranty: IWarranty;
    private circuirtyWarranty: IWarranty;

    private circuitry: Maybe<Part> = Maybe.none<Part>();

    private operatinalStatus: DeviceStatus;


    private readonly warrantyMap: Map<DeviceStatus, (action: () => void) => void>;

    get MoneyBackGuarantee(): IWarranty {
        return this.moneyBackGuarantee;
    }

    constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty, rulesFactory: IWarrantyMapFactory) {
        this.notOperationalWarranty = expressGuaranty;
        this.moneyBackGuarantee = moneyBackGuaranty;

        this.circuirtyWarranty = VoidWarranty.Instance;

        this.operatinalStatus = DeviceStatus.allFine();

        // this.warrantyMap = rulesFactory(
        //     this.claimMoneyBack,
        //     this.claimNotOperationalWarranty,
        //     this.claimCircuirtyWarranty
        // );
        this.warrantyMap = rulesFactory.create(
            this.claimMoneyBack,
            this.claimNotOperationalWarranty,
            this.claimCircuirtyWarranty
        );
    }

    private claimMoneyBack(action: () => void): void {
        this.moneyBackGuarantee.claim(new Date(), action);
    }

    private claimNotOperationalWarranty(action: () => void): void {
        this.notOperationalWarranty.claim(new Date(), action);
    }

    private claimCircuirtyWarranty(action: () => void): void {
        this.circuirtyWarranty.claim(new Date(), action);
    }

    installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

        this.circuitry = Maybe.some(circuitry);
        this.circuirtyWarranty = extendedWarranty;

        this.operatinalStatus = this.operatinalStatus.circuitryReplaced();
    }

    circuitryNotOperational(detected: Date) {
        this.circuitry.do((c) => {
            c.markDefective(new Date());
            this.operatinalStatus = this.operatinalStatus.circuitryFaild();
        });
    }

    visibleDamage() {
        this.operatinalStatus = this.operatinalStatus.withVisibleDamage();
    }

    notOperational() {
        this.operatinalStatus = this.operatinalStatus.notOperational();
    }

    required() {
        this.operatinalStatus = this.operatinalStatus.notOperational();
    }

    claimWarranty(onValidClaim: () => void) {
        this.warrantyMap.get(this.operatinalStatus)(onValidClaim);
    }
}
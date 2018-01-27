import { IWarranty } from "./IWarranty";
import { LifeTimeWarranty } from "./lifeTimeWarranty";
import { LimitedTimeWarranty } from "./limitedTimeWarranty";
import { SoldEquipment } from "./soldEquipment";
import { VoidWarranty } from "./voidWarranty";
// export function claimWarranty(soldEquipment: SoldEquipment, isGoodCondition: boolean, isbroken: boolean) {


//     const now = new Date();

//     if (isGoodCondition && !isbroken && soldEquipment.MonyBackGuarantee != null && soldEquipment.MonyBackGuarantee.isValidWarranty(now)) {
//         console.log(`you can retrun back product`);
//     }

//     if (isbroken && soldEquipment.ExpressGuaranty != null && soldEquipment.ExpressGuaranty.isValidWarranty(now)) {
//         console.log(`you can rrepair your product`);
//     }

// }


/// fist step of refactoring
// export function claimWarranty(soldEquipment: SoldEquipment, isGoodCondition: boolean, isbroken: boolean) {

//     const now = new Date();

//     // if (isGoodCondition && !isbroken && soldEquipment.MonyBackGuarantee != null && soldEquipment.MonyBackGuarantee.isValidWarranty(now)) {
//     //     console.log(`you can retrun back product`);
//     // }

//     // if (isbroken && soldEquipment.ExpressGuaranty != null && soldEquipment.ExpressGuaranty.isValidWarranty(now)) {
//     //     console.log(`you can rrepair your product`);
//     // }

//     if (soldEquipment.MonyBackGuarantee.isValidWarranty(now)) {
//         console.log(`you can retrun back product`);
//     }

//     if (soldEquipment.ExpressGuaranty.isValidWarranty(now)) {
//         console.log(`you can rrepair your product`);
//     }

// }

// const selldate: Date = new Date(2017, 08, 20);
// const moneyBackGuaranty: Date = new Date(2017, 09, 20);
// const warrantyDate: Date = new Date(2018, 08, 20);

// const moneyBack = new LimitedTimeWarranty(selldate, moneyBackGuaranty);
// const warranty = new LimitedTimeWarranty(selldate, warrantyDate);

// const equipment: SoldEquipment = new SoldEquipment(moneyBack, warranty);

// /// avoiding null situation
// const equipment2: SoldEquipment = new SoldEquipment(new VoidWarranty(), warranty);


/// second step of refactoring
// export function claimWarranty(soldEquipment: SoldEquipment, isGoodCondition: boolean, isbroken: boolean) {

//     const now = new Date();

//     if (soldEquipment.MoneyBackGuarantee.isValidWarranty(now)) {
//         console.log(`you can retrun back product`);
//     }

//     if (soldEquipment.ExpressGuaranty.isValidWarranty(now)) {
//         console.log(`you can rrepair your product`);
//     }

// }

// const selldate: Date = new Date(2017, 08, 20);
// const moneyBackGuaranty: Date = new Date(2017, 09, 20);
// const warrantyDate: Date = new Date(2018, 08, 20);

// const moneyBack = new LimitedTimeWarranty(selldate, moneyBackGuaranty);
// const warranty = new LimitedTimeWarranty(selldate, warrantyDate);

// const equipment: SoldEquipment = new SoldEquipment(moneyBack, warranty);
// const lifetimeWarranty = new LifeTimeWarranty(selldate);
// /// avoiding null situation
// // const equipment2: SoldEquipment = new SoldEquipment(new VoidWarranty(), warranty);
// // const equipment2: SoldEquipment = new SoldEquipment(VoidWarranty.Instance, warranty);
// const equipment2: SoldEquipment = new SoldEquipment(VoidWarranty.Instance, lifetimeWarranty);


/// thirth step of refactoring
export function claimWarranty(soldEquipment: SoldEquipment, isGoodCondition: boolean, isbroken: boolean) {

    const now = new Date();

    // if (soldEquipment.MoneyBackGuarantee.isValidWarranty(now)) {
    //     console.log(`you can retrun back product`);
    // }

    // if (soldEquipment.ExpressGuaranty.isValidWarranty(now)) {
    //     console.log(`you can rrepair your product`);
    // }

    soldEquipment.MoneyBackGuarantee.claim(now, () => console.log(`you can retrun back product`));
    soldEquipment.ExpressGuaranty.claim(now, () => console.log(`you can rrepair your product`));

}

const selldate: Date = new Date(2017, 08, 20);
const moneyBackGuaranty: Date = new Date(2017, 09, 20);
const warrantyDate: Date = new Date(2018, 08, 20);

const moneyBack = new LimitedTimeWarranty(selldate, moneyBackGuaranty);
const warranty = new LimitedTimeWarranty(selldate, warrantyDate);

const equipment: SoldEquipment = new SoldEquipment(moneyBack, warranty);
const lifetimeWarranty = new LifeTimeWarranty(selldate);
/// avoiding null situation
// const equipment2: SoldEquipment = new SoldEquipment(new VoidWarranty(), warranty);
// const equipment2: SoldEquipment = new SoldEquipment(VoidWarranty.Instance, warranty);
const equipment2: SoldEquipment = new SoldEquipment(VoidWarranty.Instance, lifetimeWarranty);





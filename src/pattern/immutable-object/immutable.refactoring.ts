import { MoneyAmount } from "./moneyAmount";

let celeberationDay: boolean = false;

// export function reserve(cost: MoneyAmount) {
//     if (celeberationDay) {
//         cost.amount *= 0.5;
//     }
//     console.log(`item cost : ${cost.amount}`);
// }

// export function buy(wallet: MoneyAmount, cost: MoneyAmount) {

//     const enoughMoney: boolean = wallet.amount >= cost.amount;

//     reserve(cost);

//     if (enoughMoney) {
//         console.log(`you paid ${cost.amount} for reservation`);
//     } else {
//         console.log(`you don't have enough money for this transaction`);
//     }

// }
// /// it's true
// buy({amount : 6 , currencySymbol : "USD"} , {amount : 10 , currencySymbol : "USD"});

// /// it's false
// celeberationDay = true;
// buy({amount : 6 , currencySymbol : "USD"} , {amount : 10 , currencySymbol : "USD"});

/// first step of refactoring

// export function reserve(cost: MoneyAmount) {
//     if (celeberationDay) {
//         cost.amount *= 0.5;
//     }
//     console.log(`item cost : ${cost.amount}`);
// }

// export function reserve(cost: MoneyAmount): MoneyAmount {
//     let newCost: MoneyAmount = cost;
//     if (celeberationDay) {
//         newCost = new MoneyAmount();
//         newCost.amount *= 0.5;
//         newCost.currencySymbol = cost.currencySymbol;
//     }
//     console.log(`item cost : ${cost.amount}`);
//     return newCost;
// }

// export function buy(wallet: MoneyAmount, cost: MoneyAmount) {

//     const enoughMoney: boolean = wallet.amount >= cost.amount;

//     // reserve(cost);

//     const finialCost = reserve(cost);

//     const lastChecking = wallet.amount >= finialCost.amount;

//     if (enoughMoney && lastChecking) {
//         console.log(`you paid ${cost.amount} for reservation`);
//     } else {
//         console.log(`you don't have enough money for this transaction`);
//     }

// }
// celeberationDay = true;
// buy({ amount: 6, currencySymbol: "USD" }, { amount: 10, currencySymbol: "USD" });



/// second step of refactoring

/// modification MoneyObject is hard in entire project
// function scale(money: MoneyAmount, factor: number): MoneyAmount {
//     return new MoneyAmount(factor * money.amount, money.currencySymbol);
// }

// export function reserve(cost: MoneyAmount): MoneyAmount {
//     let newCost: MoneyAmount = cost;
//     if (celeberationDay) {
//         newCost = scale(cost, 0.5);
//     }
//     console.log(`item cost : ${cost.amount}`);
//     return newCost;
// }

// export function buy(wallet: MoneyAmount, cost: MoneyAmount) {

//     const enoughMoney: boolean = wallet.amount >= cost.amount;

//     // reserve(cost);

//     const finialCost = reserve(cost);

//     const lastChecking = wallet.amount >= finialCost.amount;

//     if (enoughMoney && lastChecking) {
//         console.log(`you paid ${cost.amount} for reservation`);
//     } else {
//         console.log(`you don't have enough money for this transaction`);
//     }

// }
// celeberationDay = true;
// buy({ amount: 6, currencySymbol: "USD" }, { amount: 10, currencySymbol: "USD" });


/// thirth step of refactoring

// function scale(money: MoneyAmount, factor: number): MoneyAmount {
//     return new MoneyAmount(factor * money.amount, money.currencySymbol);
// }

export function reserve(cost: MoneyAmount): MoneyAmount {
    let newCost: MoneyAmount = cost;
    let factor: number = 1;
    if (celeberationDay) {
        // newCost = scale(cost, 0.5);
        factor = 0.5;
    }
    console.log(`item cost : ${cost.amount}`);
    // return newCost;
    return newCost.scale(factor);
}

export function buy(wallet: MoneyAmount, cost: MoneyAmount) {

    const enoughMoney: boolean = wallet.amount >= cost.amount;

    // reserve(cost);

    const finialCost = reserve(cost);

    const lastChecking = wallet.amount >= finialCost.amount;

    if (enoughMoney && lastChecking) {
        console.log(`you paid ${cost.amount} for reservation`);
    } else {
        console.log(`you don't have enough money for this transaction`);
    }

}
celeberationDay = true;
buy(new MoneyAmount(6, "USD"),new MoneyAmount(10, "USD" ));





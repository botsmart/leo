// import { MoneyAmount } from "./moneyAmount";

// let celeberationDay: boolean = false;

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
// buy({ amount: 6, currencySymbol: "USD" }, { amount: 10, currencySymbol: "USD" });

// /// it's false
// celeberationDay = true;
// buy({ amount: 6, currencySymbol: "USD" }, { amount: 10, currencySymbol: "USD" });


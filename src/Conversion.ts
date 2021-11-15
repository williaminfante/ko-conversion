import { Big } from "big.js";

type Amount = number | undefined | boolean | string | null

export const centsToDollars = (centAmount: Amount): number => {
    // if null, NaN, boolean, or undefined -> return 0
    const filteredCentAmount = centAmount || 0
    if (filteredCentAmount > 0 && filteredCentAmount !== true) {
      return Number(
        Big(filteredCentAmount)
          .div(100)
          .toFixed(2)
      )
    }
    return 0
  }
  
export const centsToDollarsString = (centAmount: Amount): string => {
    // if null, NaN, boolean, or undefined -> return '0.00'
    const filteredCentAmount = centAmount || 0
    if (filteredCentAmount > 0 && filteredCentAmount !== true) {
      return Big(filteredCentAmount)
        .div(100)
        .toFixed(2)
    }
    return '0.00'
  }

export const dollarsToCents = (dollarAmount: Amount): number => {
    // if null, NaN, boolean, or undefined -> return 0
    const filteredDollarAmount = dollarAmount || 0
    if (filteredDollarAmount > 0 && filteredDollarAmount !== true) {
      return Number(Big(filteredDollarAmount).mul(100).toFixed(0))
    }
    return 0
  }
  
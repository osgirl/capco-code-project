function checkCashRegister(price, cash, cid) {
  const values = {
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  }

  let totalChange = Number(cash - price).toFixed(2)
  const total = Number(cid.reduce((sum, dollars) => sum + dollars[1], 0)).toFixed(2)

  if (totalChange === total) {
    return  {status: "CLOSED", change: [...cid]}
  }

  // Here is your totalChange, ma'am.
  return cid.reverse()
    .reduce((returnVal, cashRemaining, idx) => {
      const type = cashRemaining[0] // currency type
      const val = values[type] // currency value
      const avail = cashRemaining[1] // currency available in drawer

      // amount to spend for this currency in drawer
      const usage = Math.floor(Math.min(avail, totalChange) / val) * val

      // remaining amount after deducing the used amount
      totalChange = +(totalChange - usage).toFixed(2)

      // if this is the last cash drawer and there are still totalChange left
      if ((idx === cid.length - 1) && totalChange) {
        return  {status: "INSUFFICIENT_FUNDS", change: []}
      }

      // if currency used, then add it to value
      if (usage) {
        returnVal.push([type, usage])
      }

      return { status: 'OPEN', change: returnVal}
    }, [])
}

export const calculate = (money, change) => {
  let validateRule = new RegExp(/^(\d+\.\d+)$|^(\d+)$/g)

  if (!validateRule.test(change)) {
    throw new Error('Invalid number format')
  }

  let remain = parseFloat(change * 100).toPrecision(12)

  let result = money.map((m) => {
    let value = m.value * 100
    let quantity = Math.floor(remain / value)
    remain -= (quantity * value)

    return { ...m, quantity: quantity }
  })

  return result
}

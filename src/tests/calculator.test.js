import { calculate } from '../services/calculator'
import { getMoney } from '../services/money'
import _find from 'lodash.find'
const money = getMoney()

test('wrong number format', () => {
  try {
    calculate(money, '11111.11')
  } catch (e) {
    expect(e.message).toBe('Invalid number format')
  }
})

test('calculate success', () => {
  let result = calculate(money, 167.67)
  expect(money.length).toEqual(result.length)

  const hundred = _find(result, { name: '100 Dollar bill' })
  expect(hundred).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(hundred.quantity).toEqual(1)

  const fifty = _find(result, { name: '50 Dollar bill' })
  expect(fifty).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(fifty.quantity).toEqual(1)

  const twenty = _find(result, { name: '20 Dollar bill' })
  expect(twenty).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(twenty.quantity).toEqual(0)

  const ten = _find(result, { name: '10 Dollar bill' })
  expect(ten).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(ten.quantity).toEqual(1)

  const five = _find(result, { name: '5 Dollar bill' })
  expect(five).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(five.quantity).toEqual(1)

  const one = _find(result, { name: '1 Dollar bill' })
  expect(one).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(one.quantity).toEqual(2)

  const quarter = _find(result, { name: 'Quarter' })
  expect(quarter).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(quarter.quantity).toEqual(2)

  const dime = _find(result, { name: 'Dime' })
  expect(dime).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(dime.quantity).toEqual(1)

  const penny = _find(result, { name: 'Penny' })
  expect(penny).toEqual(expect.objectContaining({
    quantity: expect.any(Number)
  }))
  expect(penny.quantity).toEqual(2)
})

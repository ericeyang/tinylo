import _uniq from 'lodash/uniq'
import uniq from '../../uniq'

const arr = [
  1,
  2,
  2,
  3,
  4,
  12,
  23,
  4,
  5,
  6,
  6,
  6,
  1,
  2,
  2,
  3,
  4,
  12,
  23,
  4,
  5,
  6,
  6,
  6,
  1,
  2,
  2,
  3,
  4,
  12,
  23,
  4,
  5,
  6,
  6,
  6,
  1,
  2,
  2,
  3,
  4,
  12,
  23,
  4,
  5,
  6,
  6,
  6,
  1,
  2,
  2,
  3,
  4,
  12,
  23,
  4,
  5,
  6,
  6,
  6
]
const cycleIdx = 1000

const st = new Date().getTime()
for (let i = 0; i < cycleIdx; i++) {
  uniq(arr)
}
const et = new Date().getTime()
console.warn('[tinylo]', et - st)

const st2 = new Date().getTime()
for (let i = 0; i < cycleIdx; i++) {
  _uniq(arr)
}
const et2 = new Date().getTime()
console.warn('[lodash]', et2 - st2)

let longArr = []
const longArrCycleIdx = 10000

const st3 = new Date().getTime()
for (let i = 0; i < longArrCycleIdx; i++) {
  longArr = [...longArr, ...arr]
}
const et3 = new Date().getTime()
console.warn('[generate big array]', et3 - st3)

const st4 = new Date().getTime()
uniq(longArr)
const et4 = new Date().getTime()
console.warn('[tinylo][unique big array]', et4 - st4)

const st5 = new Date().getTime()
_uniq(longArr)
const et5 = new Date().getTime()
console.warn('[lodash][unique big array]', et5 - st5)

const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const original =  { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimProperties(original)
    expect(original).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const result = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(input)
    expect(input).toEqual(result)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const altered = utils.trimPropertiesMutation(input)
    expect(altered).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array1 = [{integer: 2}, {integer: 4}, {integer: 12}, {integer: 1}, {integer: 8}]
    const array2 = [{integer: 3}, {integer: 4}, {integer: 12}, {integer: 18}, {integer: 8}]
    const array3 = [{integer: 2}, {integer: 16}, {integer: 1}, {integer: 11}, {integer: 28}]
    const largest1 = utils.findLargestInteger(array1)
    const largest2 = utils.findLargestInteger(array2)
    const largest3 = utils.findLargestInteger(array3)
    expect(largest1).toBe(12)
    expect(largest2).toBe(18)
    expect(largest3).toBe(28)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 39; i++){
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(20)).toBe(20)
    expect(focus.drive(300)).toBe(320)
    expect(focus.drive(400)).toBe(600)
  })
  test('[16] driving the car uses gas', () => {
    focus.drive(100)
    expect(focus.milesTilEmpty).toBe(500)
    focus.drive(0)
    expect(focus.milesTilEmpty).toBe(500)
    focus.drive(1000)
    expect(focus.drive(1)).toBe(600)
    expect(focus.tank).toBe(0)
    expect(focus.milesTilEmpty).toBe(0)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    focus.refuel(20)
    focus.drive(200)
    expect(focus.odometer).toBe(800)
    expect(focus.milesTilEmpty).toBe(400)
    focus.refuel(20)
    focus.drive(700)
    focus.refuel(20)
    expect(focus.odometer).toBe(1400)
    expect(focus.milesTilEmpty).toBe(focus.tankSize * focus.mpg)
    expect(focus.tank).toBe(focus.tankSize)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(2000)
    expect(focus.milesTilEmpty).toBe(600)
    focus.drive(8000)
    expect(focus.odometer).toBe(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const even1 = await utils.isEvenNumberAsync(10)
    expect(even1).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const even2 = await utils.isEvenNumberAsync(11)
    expect(even2).toBe(false)
  })
})

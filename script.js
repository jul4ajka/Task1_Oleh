// Скільки цифр в числі n

const quantity = n => {
  if (n > 0) {
    return n.toString().split('').length
  }
  return console.log('Not a natural number')
}

console.log(quantity(-10))

// Чому рівна сума чисел n

const sum = n => {
  if (n > 0) {
    return n
      .toString()
      .split('')
      .reduce((acc, num) => acc + +num, 0)
  }
  return console.log('Not a natural number')
}

console.log(sum(12345))

//Знайти всі ідеальні числа менші заданого. Наприклад, 6 - ідеальне число, бо 6 = 1+2+3 (які є його дільниками)

const isPerfect = num => {
  let dividers = 0
  for (let i = 0; i <= num / 2; i++) {
    if (num % 2 === 0) {
      dividers += i
    }
  }
  if (num === dividers && dividers !== 0) {
    return true
  }
  return false
}

console.log(isPerfect(1234))

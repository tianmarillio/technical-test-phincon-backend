function getFibonacci(number) {
  if (number <= 1) {
    return number
  }

  return getFibonacci(number - 1) + getFibonacci(number - 2)
}

module.exports = { getFibonacci }

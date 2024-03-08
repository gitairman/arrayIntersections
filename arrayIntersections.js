const arrayIntersections = (arr1, arr2) =>
  arr1.reduce((a, c) => {
    arr2.includes(c) && a.push(c)
    return a
  }, [])

console.log(
  arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
  arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
  arrayIntersections([1, 'hello', true], [2, 'goodbye', true]),
  arrayIntersections([1, 2, 3, 4, 5], [6, 7, 8])
)

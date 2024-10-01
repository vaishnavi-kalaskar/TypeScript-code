export function add(a: number, b: number) {
  return a + b;
}

export function addall(...nums: number[]) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

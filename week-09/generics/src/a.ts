// type input = number | string
// function firstValue(nums: input[]) {
//     return nums[0]
// }

// const value = firstValue(["Vikash", "Rock", 12])
// value.toUpperCase()

function firstValue<T>(nums: T[]) {
    return nums[0]
}

const value1 = firstValue<string>(["Vikash", "Rock"])
const value2 = firstValue<number>([1, 2, 3, 4])
console.log(value1.toUpperCase())
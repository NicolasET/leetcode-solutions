function twoSum(nums: number[], target: number): number[] {
    let result: number[] = []
    for (let i = 0; i < nums.length; i++) {
        let verify: number = 0
        for (let j = i + 1; j < nums.length; j++) {
            verify = nums[i] + nums[j]
            if (verify === target) {
                result.push(i, j)
            }
        }
    }
    return result
};
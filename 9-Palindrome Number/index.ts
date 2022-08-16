function isPalindrome(x: number): boolean {
    const array: number[] = [x]
    const reverseArray: number[] = array.reverse();
    if (array === reverseArray) {
        return true
    } else {
        return false
    }
};
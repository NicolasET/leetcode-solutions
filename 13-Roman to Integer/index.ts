function romanToInt(s: string): number {
    interface romans {
        I: number,
        V: number,
        X: number,
        L: number,
        C: number,
        D: number,
        M: number
    }

    const romansValue: romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let counter: number = 0
    s.split("").forEach((value, index) => {
        if (romansValue[value] < romansValue[s[index + 1]]) {
            counter -= romansValue[value]
        } else {
            counter += romansValue[value]
        }
    })
    return counter
};
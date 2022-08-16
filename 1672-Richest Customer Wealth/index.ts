function maximumWealth(accounts: number[][]): number {
    let richestCustomer: number = 0

    for (let i = 0; i < accounts.length; i++) {
        let counter: number = 0
        for (let j = 0; j < accounts[i].length; j++) {
            counter += accounts[i][j]
        }
        richestCustomer = Math.max(richestCustomer, counter)

    }
    return richestCustomer
};
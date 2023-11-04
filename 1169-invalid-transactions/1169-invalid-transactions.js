/**
 * @param {string[]} transactions
 * @return {string[]}
 */

var invalidTransactions = function(transactions) {
    const invalid = new Array(transactions.length).fill(false)
    const res = []
    
    for (let i=0; i<transactions.length; i++) {
        const txn1 = transactions[i]
        if (isInvalidAmount(txn1)) invalid[i] = true
        
        for (let j=i+1; j<transactions.length; j++) {
            const txn2 = transactions[j]
            
            if (isInvalidNameTimeCity(txn1, txn2)) {
                invalid[i] = true
                invalid[j] = true
            }
        }
    }
    
    for (let i=0; i<invalid.length; i++) {
        let flag = invalid[i]
        let txn = transactions[i]
        
        if (flag) res.push(txn)
    }
    
    return res
};

const isInvalidAmount = (txn) => {
    const [name, time, amount, city] = txn.split(',')
    
    return amount > 1000
}

const isInvalidNameTimeCity = (txn1, txn2) => {
    const [name1, time1, amount1, city1] = txn1.split(',')
    const [name2, time2, amount2, city2] = txn2.split(',')
    
    const name = name1 === name2
    const time = Math.abs(time2 - time1) <= 60
    const city = city1 !== city2
    
    return name && time && city
}

/*
    INVALID if:
        amount > 1000
        occurs within & including 60min of another txn
            same name
            different city
    
    array of strings transaction
        "name, time(in min), amt, city"
    return list of txns possibly invalid
*/
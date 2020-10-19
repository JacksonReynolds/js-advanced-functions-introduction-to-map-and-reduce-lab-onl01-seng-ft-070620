function mapToNegativize(arr) {
    let negNums = []
    for (let num of arr) {
        negNums.push(num*(-1))
    }
    return negNums
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let dubNums = []
    for (let num of arr) {
        dubNums.push(num*2)
    }
    return dubNums
}

function mapToSquare(arr) {
    let sqNums = []
    for (let num of arr) {
        sqNums.push(num**2)
    }
    return sqNums
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (const val of arr) {
        if (!val) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (const val of arr) {
        if (!!val) {
            return true
        }
    }
    return false
} 

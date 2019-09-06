const mapToNegativize = (arr) => {
    let newArr = []
    arr.forEach((val) => { newArr.push(val * -1) })
    return newArr
}

const mapToNoChange = (arr) => {
    let newArr = []
    arr.forEach((val) => { newArr.push(val) })
    return newArr
}

const mapToDouble = (arr) => {
    let newArr = []
    arr.forEach((val) => { newArr.push(val * 2) })
    return newArr
}

const mapToSquare = (arr) => {
    let newArr = []
    arr.forEach((val) => { newArr.push(val**2) })
    return newArr
}

const reduceToTotal = (arr, start=0) => {
    let sum = start
    arr.forEach((num) => { sum += num })
    return sum
}

const reduceToAllTrue = (arr) => {
    let result = true
    arr.forEach((val) => {
        if (!!!val) { result = false }
    })
    return result
}

const reduceToAnyTrue = (arr) => {
    let result = false
    arr.forEach((val) => {
        if (!!val) { result = true }
    })
    return result
}
// Your code here
function mapToNegativize(array){
    const newArr =[]
    console.log(array)
    for(let i=0; i< array.length; i++){
        newArr.push(array[i] * -1)
    }
    return newArr
}
function mapToNoChange(array){
    return array
}

function mapToDouble(array) {
    const newArr = []
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2)
    }
    return newArr
}
function mapToSquare(array) {
    const newArr = []
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * array[i])
    }
    return newArr
}


// function reduceToTotal(arr, start){
//     console.log(total, `<-total`, start, `<-start`)
//     let total = start
//     for(let i=0; i<arr.length; i++){
//         console.log(total)
//         total = total + arr[i]
//     }
//     console.log(total)
//     return total
// }

const reduceToTotal = (arr, start=0) => {
    let total = start
    arr.forEach(num => {
        total += num
    })
    return total
}

function reduceToAllTrue(array){
    // console.log(array)
    let testArr = []
    for(let i=0;i<array.length;i++){
        if (array[i] == null || array[i] == false){
            testArr.push('x')
        } 
    }
    // console.log(testArr)
    if(testArr.length != 0){
        return false
    }else{
        return true
    }

}

function reduceToAnyTrue(array){
    let testArr = []
    console.log(array, `<-array`)
    for(let i=0; i<array.length; i++){
        if(array[i] != true){
            testArr.push('x')
        }
    }
    console.log(testArr, `<-testArr`)
    if (testArr.length === array.length) {
        return false
    } else {
        return true
    }
}
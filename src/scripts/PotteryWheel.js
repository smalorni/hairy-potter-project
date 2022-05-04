//variable = assign a value of 1
let potteryId = 1


//export module
//parameters needed in following order: shape, weight, height
//since ID is already assigned to value, you just add ++ to potteryId
export const makePottery = (shape, weight, height) => {
    let potteryObj = {shape, weight, height, id: potteryId++}
    //return object w/ following properties
    return potteryObj
}


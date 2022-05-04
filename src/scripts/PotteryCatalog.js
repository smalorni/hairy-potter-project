//define an empty array that is not exported
let potteryArray = []

//export function to determine if pieces of pottery should be sold
//The toSellOrNotToSell function must accept a pottery object as input.
export const toSellOrNotToSell = (potteryObj) => {
//If the pottery is not cracked, add the object to the module-level array of items to be sold.
    if (potteryObj.cracked === false) {
    //need to push obj into empty array
        potteryArray.push(potteryObj)
     //weight of piece is greater than, or equal to, 6 then the function must add a price property with a value of 40.
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
    //weight of piece is less than 6, function must add a price property with value of 20
        } else if (potteryObj.weight < 6) {
            potteryObj.price = 20
        }
    }
    return potteryObj
}
//define and export a function named usePottery returns a copy of array of items to be sold. Recall which array method creates a copy of array. -- spread operator ES6 
export const usePottery = () => {
    let newPotteryArray = [...potteryArray]
    return newPotteryArray
}

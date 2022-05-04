
//export function named firePottery w/ two parameters: obj, fire temp
export const firePottery = (potteryObj, fireTemp) => {
//The function must add a new property of fired with the value of true to the object.
     potteryObj.fired = true
//The function must add a new property of cracked to the object if true
//temp is above 2200 degrees, cracked property must have value of true
        if (fireTemp > 2200) {
            potteryObj.cracked = true
//temp is at or below 2200 degrees, cracked property must have value of false
        } else if (fireTemp <= 2200) {
            potteryObj.cracked = false //defining the value for =
        }
        //return object
        return potteryObj
    }
       

  
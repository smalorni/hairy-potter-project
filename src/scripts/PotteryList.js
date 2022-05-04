//import 2nd function usePottery
import { usePottery } from "./PotteryCatalog.js"

//empty string
let htmlString = "";

//export function PotteryList
export const PotteryList = () => {
//must get the items to be sold from PotteryCatalog.js module
    const potteryCollection = usePottery();
//use for of loop to iterate
    for (const potteryObj of potteryCollection) {
//start htmlString inside of loop, utilize object properties
        htmlString += `<section class="pottery" id="pottery--${potteryObj.id}">
        <h2 class="pottery__shape">${potteryObj.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${potteryObj.weight} grams and is ${potteryObj.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${potteryObj.price}
        </div>
    </section>`
    }
//return string
    return htmlString
}


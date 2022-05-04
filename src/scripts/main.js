import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";

//make 5 pieces of pottery
//invoke makePottery function, provide required values of shape, weight, height
let potteryItem = makePottery("Bowl", 3, 4)

//copy and paste 4 more times, add values as arguments
let potteryItem2 = makePottery("Plate", 2, 2)
let potteryItem3 = makePottery("Vase", 11, 8)
let potteryItem4 = makePottery("Tea Cup", 5, 10)
let potteryItem5 = makePottery("Candy Dish", 3, 4)
//console.log(pottery);

//invoke firePottery function for each 5 pottery items
let finalPottery = firePottery(potteryItem, 3000)
let finalPottery2 = firePottery(potteryItem2, 4500)
let finalPottery3 = firePottery(potteryItem3, 1230)
let finalPottery4 = firePottery(potteryItem4, 2500)
let finalPottery5 = firePottery(potteryItem5, 1001)
//console.log(finalPottery3);


//invoke toSellOrNotToSell function
let sellList = toSellOrNotToSell(potteryItem)
let sellList2 = toSellOrNotToSell(potteryItem2)
let sellList3 = toSellOrNotToSell(potteryItem3)
let sellList4 = toSellOrNotToSell(potteryItem4)
let sellList5 = toSellOrNotToSell(potteryItem5)
//console.log(sellList4);

//invoke PotteryList
//define a new variable
let beautifulPottery = PotteryList()
//console.log(beautifulPottery);

const parentHTMLElement = document.querySelector(".potteryList") //match what you put in index.html -- class

parentHTMLElement.innerHTML = PotteryList()




export default class coinCounter {

  coinCounter(userInput) {
    Math.floor(userInput/Q)
    return;
  }
}

function breakMoney(userInput) {
  const listOfCoins = [25, 10, 5, 1];
  let newList = [];
  for (let i=0; i<4; i++)
  {
    coinsAmount = Math.floor(userInput / listOfCoins[i]);
    userInput %= listOfCoins[i];
    newList[i] = coinsAmount;
  }
  return newList;
}

const listOfCoins = [25, 10, 5, 1];
const newList = listOfCoins.map(function(userInput){
  coinsAmount = Math.floor(userInput / listOfCoins);
  userInput %= listOfCoins;
  newList = coinsAmount;
  return newList;
})

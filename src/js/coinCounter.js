export default class coinCounter {

  coinCounter(userInput) {
    Math.floor(userInput/Q)
    return;
  }
}

function breakMoney(userInput) {
  const listOfCoins = [25, 10, 5, 1];
  let newList = [];

  for (let i=0; i<=3; i++)
  {
    
    coinsAmount = Math.floor(userInput / listOfCoins[i]);
    userInput %= listOfCoins[i];
    newList[i] = coinsAmount;
    
  }
  return newList;
}

breakMoney();
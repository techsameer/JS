const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`Accumulator : ${acc}, and current value ; ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
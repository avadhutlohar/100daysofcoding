// 1. Show Rating

// Given a ratimg, display a star(*) for each full rating and full stop(.) for each half rating.

function showRating(rating) {
    let ratings = "";
    for(let i=0;i < Math.floor(rating); i++)
    {
        ratings += "*";
        if(i !== Math.floor(rating) - 1){
            ratings += " ";
        }
    }
    if(!Number.isInteger(rating))
    {
        ratings += " .";
    }
    return ratings;

}
console.log(showRating(4.5));


// 2.Sort by lowest to highest price

// Given an array of numbers , return the prices sorted by low to high

function sortLowToHigh(numbers)
{
    return numbers.sort((a, b) => a-b);
}
console.log(sortLowToHigh([1,5,0,74,6,33]));



// 2.Sort by highest to lowest  price

// Given an array of objects , return the prices sorted by high to low

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => {
    return b.price - a.price;
  }
 );
}
console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: -500 },
    { id: 5, price: 570 },
  ])
);

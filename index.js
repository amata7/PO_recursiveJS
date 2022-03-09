/* GIVEN array of values AND param which specifies even or odd
   sortArr function sorts values by their index, beginning from the end of the array
   Use 'node index.js' to run code and view results in the console

   For odd: 
   The last item in the initial array will be the first valid item 
   to be pushed into the new array (Where index is equal to array.length - 1)
   
   For even:
   The second to last item in the initial array will be the first valid item 
   to be pushed into the new array (Where index is equal to array.length - 2)
*/
const array = [1, 2, 3, 4, 5, 6, 7];
const param = "odd";

function sortArr(arr, par) {
  let newArr = [];
  if (par === "even") {
    for (i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 === 0) {
        console.log(
          { "value of i in reversed array": i },
          { "value at index i ": arr[i] }
        );
        newArr.push(arr[i]);
      }
    }
  }
  if (par === "odd") {
    for (i = 0; i < arr.length; i++) {
      if ((i + 1) % 2 != 0) {
        console.log({ "value of i": i }, { "value at index i ": arr[i] });
        newArr.push(arr[i]);
      }
    }
  }
  console.log({ "New Array": newArr.reverse() });
}

sortArr(array.reverse(), param);

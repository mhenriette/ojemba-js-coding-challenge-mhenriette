/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
export default function processItems(items) {
  const processedItems = [];
  items.map((el) => el.type === "Food" && processedItems.push(el));
  return processedItems;
}

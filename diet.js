// function whatCatWillEat(foods, catPreferences) {
//   return _.filter(foods, function (food) {
//     return _.some(catPreferences, function (preference) {
//       return _.contains(food, preference);
//     });
//   });
// }

function whatCatWillEat(foodArrays, catLikes) {
  return _.filter(foodArrays, function (foods) {
    return _.some(foods, function (ingredients) {
      return _.contains(catLikes, ingredients);
    });
  });
}

console.log(whatCatWillEat(
  [['flour', 'water'],
    ['potato', 'water', 'cream', 'flour', 'butter', 'salt', 'pepper'],
    ['chicken', 'oil', 'parsley', 'lemon', 'distilled vinegar', 'bay leaf',
      'salt', 'black pepper', 'clove', 'green onion', 'flour', 'white wine', 'egg yolk'],
    ['beef', 'salt', 'pepper', 'flour', 'lard', 'oil', 'butter', 'cream'],
    ['buttermilk', 'egg', 'flour', 'baking soda', 'butter'],
    ['pork grease', 'beef', 'flour', 'vinegar', 'salt', 'pepper'],
    ['cornmeal', 'salt', 'water'],
    ['pork', 'rice', 'sugar', 'flour', 'pepper'],
    ['flour', 'salt', 'pepper', 'water',
      'beef', 'egg', 'onion', 'potato', 'pork', 'dehydrated vegetable'],
    ['beef', 'salt', 'pepper'],
    ['egg', 'salt', 'nutmeg', 'butter', 'cream', 'bread'],
    ['breadcrumb', 'cheese', 'water'],
    ['fish', 'cayenne pepper', 'black pepper', 'salt', 'rosemary', 'thyme'],
    ['fish', 'cornmeal', 'salt', 'black pepper', 'cayenne pepper', 'bacon'],
    ['flour', 'salt', 'pepper', 'fish', 'oil', 'parsley', 'onion']],
  ['fish', 'beef', 'pork', 'chicken'],
));

/*
  Output should be:
    (9) [Array(13), Array(8), Array(6), Array(5), Array(10), Array(3), Array(6), Array(6), Array(7)]

  That is not particularly readable, but when expanded the result is:
    [['chicken', 'oil', 'parsley', 'lemon', 'distilled vinegar', 'bay leaf',
      'salt', 'black pepper', 'clove', 'green onion', 'flour', 'white wine', 'egg yolk'],
     ['beef', 'salt', 'pepper', 'flour', 'lard', 'oil', 'butter', 'cream'],
     ['pork grease', 'beef', 'flour', 'vinegar', 'salt', 'pepper'],
     ['pork', 'rice', 'sugar', 'flour', 'pepper'],
     ['flour', 'salt', 'pepper', 'water', 'beef', 'egg', 'onion', 'potato', 'pork', 'dehydrated vegetable'],
     ['beef', 'salt', 'pepper'],
     ['fish', 'cayenne pepper', 'black pepper', 'salt', 'rosemary', 'thyme'],
     ['fish', 'cornmeal', 'salt', 'black pepper', 'cayenne pepper', 'bacon'],
     ['flour', 'salt', 'pepper', 'fish', 'oil', 'parsley', 'onion']]
*/

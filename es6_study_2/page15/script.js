const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
 
  console.log(`名前は${characters[i].name}です`);
  
  // if文を追加してください
  if (characters[i].age === undefined) {
    console.log("年齢は秘密です");
  } else {
    console.log(`${characters[i].age}歳です`);
  }
  
  
}

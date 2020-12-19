var height = 1.7;
var weight = 60;

// この下にコードを書いてください
console.log("BMIは" + weight / height /height +"です");

console.log("適正体重は" + height * height * 22 + "kgです" );

var BMI = weight / height /height;

if (BMI < 18.5) {
  console.log("痩せ気味です");
}else if(BMI < 25) {
  console.log("普通です");
}else{
  console.log("肥満気味です");
}

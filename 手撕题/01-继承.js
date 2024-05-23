// 原型链继承
function Car(type) {
  this.type = type
}
Car.prototype.say = function(){
  console.log("this", this)
  return this.type
}

Car.prototype.ouputName = function(){
  console.log("this", this)
  // return this.name
}

function Saloon(name) {
  this.name = name
}

Saloon.prototype = new Car("轿车")

let benchi = new Saloon("奔驰")
// console.log(benchi, benchi.name)
console.log(benchi.ouputName())
console.log(benchi.__proto__.ouputName())

let baoma = new Saloon("宝马")
// console.log(baoma, baoma.name)
// console.log(baoma.ouputName())
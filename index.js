/////////////// 1 - masala ///////////////

// let first = new Promise((resolve) => setTimeout(resolve, 800, "800ms"));
// let second = new Promise((resolve) => setTimeout(resolve, 200, "200ms"));
// let third = new Promise((resolve) => setTimeout(resolve, 1200, "1200ms"));

// Promise.race([first, second, third]).then((value) => {
//   console.log(value);
// });

/////////////// 2 - masala ///////////////

// class Animal {
//   constructor(name, weight) {
//     this.name = name;
//     this.weight = weight;
//   }
// }
// class Wolf extends Animal {
//   constructor(name, weight, lifetime, category) {
//     super(name, weight);
//     this.lifetime = lifetime;
//     this.category = category;
//   }
//   func() {
//     return `${this.name} ${this.category}lar turkumiga mansub. ${this.lifetime} yil umr ko'radi va vazni ${this.weight} kg `;
//   }
// }
// class Eagle extends Animal {
//   constructor(name, weight, speed, length) {
//     super(name, weight);
//     this.speed = speed;
//     this.length = length;
//   }
//   func2() {
//     return `${this.name}ning vazni ${this.weight} kg va tanasining uzlunligi ${this.length} metr va maxsimal tezligi ${this.speed} km/soat`;
//   }
// }
// class Snake extends Animal {
//   constructor(name, weight, length, category) {
//     super(name, weight);
//     this.length = length;
//     this.category = category;
//   }
//   func3() {
//     return `${this.name} ${this.category} turkumga mansub. Vazni ${this.weight} kg va uzunligi ${this.length} metr`;
//   }
// }

// let res = new Wolf("Northwestern wolf", 40, 12, "Yirtqich");
// let res2 = new Eagle("Golden eagle", 4, 320, 2);
// let res3 = new Snake("Kobra", 5, 8, "Sudralib yuruvchilar");
// console.log(res);
// console.log(res2);
// console.log(res3);

/////////////// 3 - masala ///////////////

// class MyClass {
//   static Reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i]);
//     }
//     return newArr;
//   }
//   static Reduce(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
//   static Includes(arr, n) {
//     let res = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === n) {
//         res = true;
//       }
//     }
//     return res;
//   }
// }
// console.log(MyClass.Reverse([5, 4, 3, 2, 1]));
// console.log(MyClass.Reduce([1, 2, 3, 4, 5]));
// console.log(MyClass.Includes([1, 2, 3, 4, 5], 6));

/////////////// 4 - masala ///////////////

// class MyClass {
//   #num1;
//   #num2;
//   constructor(num1, num2) {
//     this.#num1 = num1;
//     this.#num2 = num2;
//   }
//   multy() {
//     return this.#num1 * this.#num2;
//   }
//   sum() {
//     return this.#num1 + this.#num2;
//   }
// }
// let res = new MyClass(12, 6);
// console.log(res.multy());
// console.log(res.sum());
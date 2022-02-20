// type
var a = "hello world";
function getLowerCase(str) {
    return str.toLocaleLowerCase();
}
console.log(getLowerCase("Hello World"));
var b = 32;
function add(num1, num2) {
    return num1 + num2;
}
add(3, 4);
var substract = function (num1, num2) {
    return num1 - num2;
};
substract(5, 6);
var arr = [4, 506, 64];
var arr1 = ["adsf", "asdf", "sdf"];
var arr2 = [56, "adf", "adsf", 78];
var d = "dadf";
var person = {
    name: "Suhag",
    age: 22,
    hobby: "Programming"
};
var person2 = {
    name: "Mokta",
    age: 21
};
// enum
var Colors;
(function (Colors) {
    Colors["color1"] = "#fff";
    Colors["color2"] = "#222";
    Colors["color3"] = "#f7f7f7";
})(Colors || (Colors = {}));
console.log(Colors.color1);
// Generic -->
// function _concat<T>(a: T, b: T): T {
//   return a + b;
// }
// _concat<number>(4, 5);
// _concat<string>("Suhag", "Mokta");

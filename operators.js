let number = 23;
let number2 = 23;
document.write(number == number2);
let space = " ";
document.write(space);
let number3 = 13;
document.write(number == number3);
document.write(space);
let text = "text1";
let text2 = "text2";
document.write(text != text2);
document.write(space);
document.write(number < number2);
document.write(space);
let text3 = "23";
document.write(number == text3);
document.write(space);
document.write(number === text3);
document.write(space);
document.write(number !== text3);
document.write(space);
document.write(number != text3);
document.write(space);
value = 12;
value2 = 24;
sentence = value < value2;
sentence2 = value != value2;
document.write(sentence && sentence2)
document.write(space);
value = 12;
value2 = 24;
sentence = value > value2;
sentence2 = value != value2;
document.write(sentence && sentence2)
document.write(space);
document.write(sentence || sentence2)
document.write(space);
document.write(!true)
document.write(space);
let a = 12;
let b = 24;
let c = 25;
let d = 92;
let e = 91;
op = (e > b && d < c) || (!(a === b) || c != c);
document.write(op);
document.write(space);
op2 = (a < b || b < a) && (!(a != b) && e != c);
document.write(op2);
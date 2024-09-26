const obj1 = {
    a:1,
    b:2,
    c:3
}
const {b} = obj1
console.log(b);

const obj2 = {
    x:13,
    y:50,
    z:3
}
const obj3 = {
    ...obj1,
    ...obj2
}

// console.log(obj3);

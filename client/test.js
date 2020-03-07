console.log('test on');

function* gen(i) {
   yield i;
   yield i + 10;
   return "agony"
};

const g = gen(6)
const gObj = g.next();
const jObj = g.next();
const mObj = g.next();
const rObj = g.next();
console.log(gObj)
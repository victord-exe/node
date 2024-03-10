// .js -> por defecto utilza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utiliar CommonJs

import { sub, sum, mult } from './sum.mjs'

console.log(sum(1, 2))
console.log(sub(1, 2))
console.log(mult(1, 2))

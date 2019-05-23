import { fastFib, fibJs } from './fib';
import { fast_fib_rs, fib_rs } from './fib.rs';

console.time('fibjs(40) cost time');
console.log('fibjs(40):|>', fibJs(40));
console.timeEnd('fibjs(40) cost time');

console.log('\n');

console.time('fastFibJS(40) cost time');
console.log('fastFibJS(40):|>', fastFib(40));
console.timeEnd('fastFibJS(40) cost time');

console.log('\n');

console.time('fib_rs(40) cost time');
console.log('fib_rs(40):|>', fib_rs(40));
console.timeEnd('fib_rs(40) cost time');

console.log('\n');
console.time('fast_fib_rs(40) cost time');
console.log('fast_fib_rs(40):|>', fast_fib_rs(40));
console.timeEnd('fast_fib_rs(40) cost time');

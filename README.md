# simple-wasm-demo

a simple wasm demo

<em> parcel is very cool.</em>

## getting started

```sh
git clone https://github.com/hufeng/simple-wasm-demo.git
cd simple-wasm-demo
yarn # npm install

# 测试web
yarn run:web
# visit http://localhost:1234

# 测试node
yarn run:node
```

## result

```text
❯ yarn run:node
yarn run v1.16.0
$ parcel build -t node src/node/index.ts && node dist/index.js
✨  Built in 1.39s.

dist/fib.226c05c9.wasm    828.05 KB    1.34s
dist/index.js.map           7.54 KB      4ms
dist/index.js               3.92 KB    1.60s
fibjs(40):|> 165580141
fibjs(40) cost time: 1471.334ms


fastFibJS(40):|> 165580141
fastFibJS(40) cost time: 0.138ms


fib_rs(40):|> 165580141
fib_rs(40) cost time: 549.065ms


fast_fib_rs(40):|> 165580141
fast_fib_rs(40) cost time: 0.028ms
✨  Done in 4.45s.

```

/**
 * Simple Stupid calculate
 *
 * @param n
 */

export function fibJs(n: number) {
  if (n < 2) {
    return 1;
  } else {
    return fibJs(n - 1) + fibJs(n - 2);
  }
}

/**
 * 更快的算法
 * @param n
 */
export function fastFib(n: number) {
  let [x, y] = [1, 1];
  if (n < 2) {
    return y;
  }

  for (let i = 2; i <= n; i++) {
    [x, y] = [y, x + y];
  }

  return y;
}

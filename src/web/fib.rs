#[no_mangle]
fn fib_rs(x: i32) -> i32 {
  if x < 2 {
    1
  } else {
    fib_rs(x-1) + fib_rs(x-2)
  }
}

#[no_mangle]
fn fast_fib_rs(n: i32) -> i32 {
  let mut x = 1;
  let mut y = 1;
  let mut temp = 0;
  
  if n < 2 {
    return y;
  }

  for i in 2..=n {
    temp = x;
    x = y;
    y = temp + x;
  }

  y
}
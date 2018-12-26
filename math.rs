#[no_mangle]
fn add(x: i32, y: i32) -> i32 {
  x + y
}

#[no_mangle]
fn fib(x: i32) -> i32 {
  if x < 2 {
    2
  } else {
    fib(x-1) + fib(x-2)
  }
}

#[no_mangle]
fn fib2(x: i32) -> i32 {
  match x {
    1 => 1,
    2 => 1,
    n => fib(n-1) + fib(n-2)
  }
}

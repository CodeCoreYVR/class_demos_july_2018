const { log } = console;
function a() {
  log("This is A");
}
function b() {
  a();
  log("This is B");
}
function c() {
  b();
  log("This is C");
}
function d() {
  c();
  log("This is D");
}

function startDemo() {
  debugger;
  d();
}

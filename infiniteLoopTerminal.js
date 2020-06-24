function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}


function myFunc() {
//  for (let i = 1; i != 4; i += 2) { will end in an infinite loop
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

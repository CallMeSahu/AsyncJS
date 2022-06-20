//ex 02

let strLength = (name, cb) =>{
  cb(name, name.length)
}

let printName = (name, len) => {
  console.log(`OMG ${name} is ${len} characters long!!`)
}

strLength("Siddhartha", printName);
strLength("Vidhu", printName);

//ex 03

let success = () => console.log("Yay, I am alive!")
let fail = () => console.log("Give my bose speakers and apple headphones to my sister")

let willThanosKillMe = (name, cb1, cb2) =>{
  if(name.length%2 === 0){
    cb1();
  }
  else{
    cb2();
  }
}

willThanosKillMe("Siddhartha", success, fail);
willThanosKillMe("Vidhu", success, fail);


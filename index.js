//ex:2

let printName = (name, len) => {
  console.log(`OMG ${name} is ${len} characters long!!`)
}

let strLength = (name, cb) =>{
  cb(name, name.length)
}

strLength("Siddhartha", printName);
strLength("Vidhu", printName);

//ex:3

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

//ex:4

const printAfterDelay = (message, delay) => setTimeout(() => console.log(message), delay);

printAfterDelay("Hi Siddhartha", 2000);

//ex:11
function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 3000)
  })
}

fakeFetch("Siddhartha is Awesome!")
.then(data => console.log(data))

//ex:12

fakeFetch("Siddhartha is Awesome!")
.then(data => console.log(data))
.catch(error => console.log(error))

//ex:13

const getServerResponseLength = (msg) =>{
  fakeFetch(msg)
  .then(data => data.length)
}

getServerResponseLength("Siddhartha");

//ex:14
const syncCallsTogether = (msg1,msg2) =>{
  fakeFetch(msg1)
  .then(dataForMsg1 => fakeFetch(msg2)
       .then(dataForMsg2 => console.log({dataForMsg1, dataForMsg2})))
}

syncCallsTogether("Siddhartha", "Sahu");

const parallelCallsToServer = (msg1, msg2) => {
  
  fakeFetch(msg1).then(output1 => console.log({output1}));
  fakeFetch(msg2).then(output2 => console.log({output2}));
}

parallelCallsToServer("Siddhartha", "Sahu")

//ex:15
const mainCall = async (msg) => {
  const data = await fakeFetch(msg);
  console.log(data)
}

mainCall("Hi Siddhartha Sahu")

//ex:16
const syncCallToServer2 = async (msg1, msg2) => {
  const dataFromOne = await fakeFetch(msg1);
  const dataFromTwo = await fakeFetch(msg2);
  console.log({dataFromOne, dataFromTwo});
}

syncCallToServer2("Siddhartha", "Sahu");


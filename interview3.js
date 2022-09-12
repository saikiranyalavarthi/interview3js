//question8
let promise = new Promise((resolve, reject) => {
	resolve();
});

promise
	.then(() => {
		console.log("first");
	})
	.then(() => {
		setTimeout(() => {
            console.log("second");
        }, 3000);
	})
	.then(() => {
        console.log("third");
	}); //this will not print the details in certain way we expected 
//to over comethat we introduce a promise 
promise
	.then(() => {
		console.log("first");
	})
	.then(() => {
		return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("second");
                resolve();
                // reject();
            }, 3000);
        })
	})
	.then(() => {
        console.log("third");
	})
    .catch((err) => {
        console.log(err);
    });

//question 9
hello = () => {
    return "Hello World!";
  }
//question10
async function tryingPromise(){
	console.log("i am inside the function using async/await");
	const response=await fetch("https://api.github.com/users");
	console.log("befoe the response is fetched");
	const users= await response.json();
	console.log("users resolved");

	return users;
}

console.log("before calling the function");
let data= tryingPromise();
console.log("after calling the function");
console.log("data received",data);
data.then((res)=>{
	console.log(res);

})
console.log("end of code");
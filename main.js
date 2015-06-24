// JavaScript Document

// TEST 0 1 2 3 4
for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log("End Test");


//exercise 1: 0 100 200 300 400 500
for(var i = 0; i <= 5; i++) {
	console.log(i*100);
}
console.log("End Exercise 1");


//exercise 2: 1 2 4 8 16 32 64
for(var i = 1; i < 65; i*=2) {
	console.log(i);
}
console.log("End Exercise 2");


//exercise 3: 1 1 1 2 2 2 3 3 3
for(var i = 1; i <= 3; i++){
    
    for(var x = 1; x <= 3; x++){
    	console.log(i);
	}

}
console.log("End Exercise 3");


//exercise 4: 0 2 4 6 8 10
for(var i = 0; i <= 10; i+=2){
    console.log(i);
}
console.log("End Exercise 4");


//exercise 5: 3 6 9 12 15
for(var i = 3; i <= 15; i+=3){
    console.log(i);
}
console.log("End Exercise 5");

//exercise 6: 9 8 7 6 5 4 3 2 1 0
for(var i = 9; i >= 0; i--){
    console.log(i);
}
console.log("End Exercise 6");

//exercise 7: 0 1 2 3 0 1 2 3 0 1 2 3
for(var x = 0; x < 3; x++) {
	for(var i = 0; i <= 3; i++) {
    console.log(i);
	}	
}
console.log("End Exercise 7");
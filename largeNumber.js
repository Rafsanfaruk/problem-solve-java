/*তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।
*/ 





// let nameOne = "John"
// let nameTwo = "Alexis";

// let friendOneLength= nameOne.length;
// let friendTwoLength= nameTwo.length;

// if(friendOneLength > friendTwoLength){
//     console.log(nameOne.split("").reverse().join(""));
// }else{
//     console.log(nameTwo.split("").reverse().join(""))
// }

// function reverseName(nameOne, nameTwo){
//     let friendOneLength= nameOne.length;
//     let friendTwoLength= nameTwo.length;
    
//     if(friendOneLength > friendTwoLength){
//         return nameOne.split("").reverse().join("");
//     }else{
//         return nameTwo.split("").reverse().join("");
//     }
// }
// let result = reverseName("John", "Alexis");
//  console.log(result);







let nameOne= "Rafsan";
let nameTwo="Monirozzaman";

function reverseName(nameOne,nameTwo){
    let friendOneLength=nameOne.length;
    let friendTwoLength=nameTwo.length;

    if(friendOneLength > friendTwoLength){
        return nameOne.split("").reverse().join("");
    }
    else{
        return nameTwo.split("").reverse().join("");
    }
}

const output =reverseName(nameOne,nameTwo);
console.log(output);

// function reverseLargerName(name1, name2) {
//     var largerName = name1.length >= name2.length ? name1 : name2;
//     return largerName.split("").reverse().join("");
// }
// var reversedLargerName = reverseLargerName("Rafsan", "Monirozzaman");
// console.log(reversedLargerName);


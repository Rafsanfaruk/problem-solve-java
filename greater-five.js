/* 
এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

আউটপুটঃ 3 যে  আউটপুট গুলা বড় অই গুলা যোগ করবো কিভাবে
*/ 

// let num = 4;

// if (num > 5) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];

// let count =0;
 

//  for (let i= 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element >5){
//         // console.log("YES");
//         count=count+1;
//     }
//     else{
//         // console.log("NO");
//     }
    
//  }
//  console.log(count);


//  function greaterThanFive(numbers) {
//     let count = 0;
  
//     for (let i = 0; i < numbers.length; i++) {
//       const element = numbers[i];
//       if (element > 5) {
//           count =count +1
//       }
//       // count++;
//       // count =count +1
//       // count+=1
//     }
//     return count;
//   }
  
//   let result = greaterThanFive([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
//   console.log(result);
function greatherThanFive(numbers){
  let count=0;
  
  for(let i=0;i<numbers.length ;i++){
    if(numbers[i]>5){
      // console.log(numbers[i]);
      count+=numbers[i];
      
    }
  }
  return count;
 
}

let result=greatherThanFive([-1,1,-2,2,3,-3,4,5,6,-6,7,8,10]);
console.log(result);

  
  
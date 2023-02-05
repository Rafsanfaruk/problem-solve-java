
// function isJavaScriptFile (fileName){
//    if (fileName.endsWith('.js')) {
//     console.log("YES");
//    }
//    else{
//     console.log("NO");
//    }
// }
// isJavaScriptFile("index.js");

function isJavaScriptFile (fileName){
    if (fileName.endsWith('.js')) {
     return true;
    }
    else{
     return false;
    }
 }
 let result =isJavaScriptFile("index.js");
 console.log(result);
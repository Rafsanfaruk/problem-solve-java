/*Input
10
25
199


572.96
1432.39
11401.86
*/ 
// formula: 1rad × 180/π = 57.296°

function radianToDegree(radian){
    const PI =3.14159265359;
    const degree =(radian * 180/PI).toFixed(2);
     return degree;

}
const result =radianToDegree(199);
console.log(result);
// 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো
// (n*(n+1))/2; এটা দিয়েও করা যাই হ্যা,


let n = 10;
let sum =0;
for( let i=0;i<=n;i++){
    sum=sum+i;
}
console.log(sum);

let sum2=(n*(n+1))/2;
console.log('sum2:',sum2);
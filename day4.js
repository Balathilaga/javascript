/*console.log("questtion12");

let n=prompt("enter the factorial number");
let f=1;
for(i=1;i<=n;i++){
    f=f*i;
}console.log(f);


let no=prompt("enter the value of factorial");
let fact=1;
let a=1;
while(a <= no){
    fact=fact*a;
    a++;
}console.log(fact);

let noo =Number(prompt("enter the factorial value"));
let factu=1;
let b=1;
do{
    factu=factu*b;
    b++;
    
}while(b<=noo);
console.log(factu);


 console.log("questionsecond prime number");

let p=Number(prompt("enter the value is prime or not"));
let isPrime =true;

for(let i=2;i<=p;i++){
    if(p % i ===0){
    isPrime = false;
}
    if(isPrime){
        console.log("is prime number");
    }
    else{
        console.log("not a prime number");
    }
}



let prime = 9;
let Prime1 =true;
let  q=2;
while(q<prime){
   
    if(prime % q === 0){
      Prime1 = false;
        break;
    }
  q++;
}
if(Prime1 && prime > 1){
    console.log("is prime number");
} else{
    console.log("is not a prime number")
}

let prime2 = 7;
let prime3 = true;
let z = 2;
do{
    if(prime2 % z ===0){
        prime3 = false;
        break;
   }
  z++;
}while(z<prime2);

  if(prime3 && prime2){
    console.log("is a prime nmber")
  } 
  else{
     console.log("is not a prime number")
  }

  console.log("Questionprimeseries")

for(let l=2;l<20;l++){
    let prime = true;
for(let t=2;t<l;t++){
    if(l % t ===0){
        prime=false;
        break;
    }
}  
 if(prime){
    console.log(l);
 }
    } 

let l1=2;
while(l1<=20){
    let prime2=true;
     let q=2;
     while(q<l1){
        if(l1 % q ===0){
            prime2=false;
            break;
        }
        q++;
     }
    if(prime2){
        console.log(l1);
    }
    l1++;
}
  

let l3=2;
do{
    let prime3=true;
     let q1=2;

     if(l3>2){
        do{
            if(l3 % q1 === 0){
            prime3=false;
            break;
        }
         q1++;
     } while(q1<l3);
     }
    if(prime3){
        console.log(l3);

    }
    l3++;
} while(l3 <= 20);*/


console.log("  question 15")

let r, sum = 0, temp;
        let v = Number(prompt("enter the number ")); 
        temp = v;
       while (temp > 0)
       {
        r = temp % 10;
        sum += r * r * r;
        temp = parseInt(temp / 10);
       }
       if ( v == sum){
        console.log( v + 'is an amstrong number');
       }
       else {
        console.log(v + 'is not an amstrong number')
       }
    
    let temp1=153;
    let n1=temp1;
    let sum1=0;
   
    for( let r1=0; n1>0;temp1=parseInt/10){
        r1 = temp1 % 10;
        sum1 += r1*r1*r1;

    }if( n1 == sum1)
    {
        console.log( n1 + "this is amstrong no");
    } else{
        console.log( n1 + " this not amstron no" );
    }

    console.log("Question no 16");
    for( let y=1;y<=1000;y++){
            let sum3=0;
        
       for(let temp2=y;temp2>0;temp2=parseInt(temp2/10)){
          let v=temp2 % 10;
          sum3 += v* v* v;
       }
       if(y==sum3){
        console.log(y);
       }
    }

    console.log("question no17")
    let n=0;
    let m=1;
    console.log(n);
    console.log(m);
    for(let i=1;i<=10;i++){
        let n3=n+m;
        console.log(n3);
        n = m;
        m = n3;
    }

    let n0=0;
    let m1=1; 
    console.log(no);
    console.log(m1);
    let i=1;
 while(i<=10){
      let n4 = n0+m1;
      console.log(n4);
      n0 = m1;
      m1 = n4;
      i++;
 }

 console.log("question no 18")
 for(let i=1;i<=10;i++){
    console.log(i + "*5=" +(i*5));
 }

 let table=1;
 while(table<=10){
   console.log(i + "*5=" +(table*5));
   table++;
 }

 let table1=1;
 do{
      console.log(table1 + "*5=" +(table1*5));
      table1++;
 }while(table1<=10);

console.log("question no 19");
let n5=10;
let sum5=0;
for(let s=1;s<=n5;s++){
    sum5 = sum5 + s ;
    console.log(sum5);
}

let h=1;
let add1=0;
while(h<=4){
    add1 = add1 + h;
    console.log(add1);
    h++;
}
 let h1=1;
 let add2=0;
 do{
    add2 = add2+h1;
    console.log(add2);
    h1++;
 } while(h1<=4);
 
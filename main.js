function myRandom(min=0 , max=100){
   return Math.floor(Math.random() * ( max - min + 1 ) + min )
}

let num1 = 1
let num2 = 15
alert(" Hozir siz bilan 1 va 15 oralig'idagi sonlardan tuzilgan misollar yechamiz ")
let miqdor = + prompt("Nechta misol ishlaysiz?")

for (let i = 0; i < miqdor; i++) {
   let rand1 = myRandom( num1 , num2 )
   let rand2 = myRandom( num1 , num2 )
   
    
   
    if(rand1<5 && rand2>10){
    let userAns = prompt(`Arifmetik amalni bajaring ${rand1} + ${rand2} = ?`)
    console.log(userAns== rand1 + rand2 ? `${i+1}-misol ${rand1} + ${rand2} = ${userAns} javob to'g'ri`: `${i+1}-misol ${userAns} javob noto'g'ri. To'g'ri javob ${rand1} + ${rand2} = ${rand1 + rand2}`);
     
   }
   else if(rand1<10 && rand1>=5 && rand2%2!==0){
    let userAns = prompt(`Arifmetik amalni bajaring ${rand1} * ${rand2} = ?`)
    console.log(userAns== rand1 * rand2 ? `${i+1}-misol ${rand1} * ${rand2} = ${userAns} javob to'g'ri`: `${i+1}-misol ${userAns} javob noto'g'ri. To'g'ri javob ${rand1} * ${rand2} = ${rand1 * rand2}`);
     
   }
   else if ( rand1<15 && rand1>=10 && rand2%2==0 ) {
    let userAns = prompt(`Arifmetik amalni bajaring ${rand1} / ${rand2} = ?`)
    console.log(userAns== rand1 / rand2 ? `${i+1}-misol ${rand1} / ${rand2} = ${userAns} javob to'g'ri`: `${i+1}-misol ${userAns} javob noto'g'ri. To'g'ri javob ${rand1} / ${rand2} = ${rand1 / rand2}`);
     
   }
   else if (  rand2<5) {
    let userAns = prompt(`Arifmetik amalni bajaring ${rand1} - ${rand2} = ?`)
    console.log(userAns== rand1 - rand2 ? `${i+1}-misol ${rand1} - ${rand2} = ${userAns} javob to'g'ri`:`${i+1}-misol ${userAns} javob noto'g'ri. To'g'ri javob ${rand1} - ${rand2} = ${rand1 - rand2}`);
     
    
   }
}
   




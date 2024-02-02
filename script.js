const select=document.querySelectorAll('.currency');
const input=document.getElementById('input');
const btn=document.getElementById('btn');

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>dropDown(res))

function dropDown(res){
    let Curr=Object.entries(res);
    for(let i=0;i<Curr.length;i++){
       let option= `<option value="${Curr[i][0]}">${Curr[i][0]}</option>`
       select[0].innerHTML += option;
       select[1].innerHTML += option;
    }
   
}
   
btn.addEventListener("click",()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inputVal=input.value;
    if(curr1==curr2){
        alert("Choose the different country currency")
    }
    else{
        convert(curr1,curr2,inputVal)
       
    }
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
    //   console.log(Object.values(data.rates)[0]);
       document.getElementById('result').value=Object.values(data.rates)[0];
  });
}
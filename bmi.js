const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefualt();
    const Height=parseInt(document.querySelector('#Height').value);
    const Weight=parseInt(document.querySelector('#Weight').value);
    const Result=parseInt(document.querySelector('#Result').value);
    if(Height =='' || Height<0 || isNaN(Height)){
        Result.innerHTML=`${Height}`;
    }
    else if(Weight=='' || Weight<0 || isNaN(Weight)){
        Result.innerHTML=`Please give a valid height ${Weight}`;
    }
    else{
        const bmi=(Weight/((Height*Height)/10000)).toFixed(2);
        //show the result
        Result.innerHTml=`<span>${bmi}</span>`;
    }
});
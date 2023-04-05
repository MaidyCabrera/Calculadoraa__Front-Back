const suma= document.getElementById("suma");
const resta= document.getElementById("resta");
const multiplicar= document.getElementById("multiplicar");
const dividir= document.getElementById("dividir");

suma.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);      
               
        const respuesta= await fetch(
            'http://localhost:3000/calculadora/suma',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );

        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.value=dato;
        console.log(">>>>>Suma",dato)
    }
);

resta.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);      
               
        const respuesta= await fetch(
            'http://localhost:3000/calculadora/resta',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );

        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.value=dato;
    }
);

multiplicar.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);      
               
        const respuesta= await fetch(
            'http://localhost:3000/calculadora/multiplicacion',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );

        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.value=dato;
    }
);

dividir.addEventListener(
    'click',
    async (event)=>{
        event.preventDefault();        
        const numero_1= parseFloat(document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);      
               
        const respuesta= await fetch(
            'http://localhost:3000/calculadora/division',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );

        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.value=dato;
    }
);

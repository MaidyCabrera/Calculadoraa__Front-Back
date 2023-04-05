const express=require('express');
const app= express();

app.use(express.json());
app.use( function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
}
);

app.post(
    '/calculadora/suma',
    (req, res)=>{
        console.log("Alguien está conectándose a esta ruta!!");        
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);        
        res.json(resultado);
    }
);

app.post(
    '/calculadora/resta',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)-parseFloat(numero_2);        
        res.json(resultado);
    }
);

app.post(
    '/calculadora/multiplicacion',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1*numero_2;        
        res.json(resultado);
    }
);

app.post(
    '/calculadora/division',
    (req,res)=>{
        let resultado;
        try{
            const {numero_1, numero_2}= req.body;           
            resultado=numero_1/numero_2;   
        }catch(error){
            resultado=error;
        }
        res.json(resultado);
    }
)

app.listen(
    3000,
    ()=>{
      console.log("Servidor ejecutándose en el puerto 3000");
    }
);
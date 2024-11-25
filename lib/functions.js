const securityRepository=require("../repositories/securityRepository");
const jwt=require("jsonwebtoken");
const functions=require("../lib/functions");

async function login(body) {
    let data=[];
    let tmp=[];

    let response={error: "Verifique la informacion suministrada"};

    if(body.login !== undefined){
        data=[body.login, body.password];
        

        let tmp = await securityRepository.login(data);

        console.log(tmp);
        

        if(Array.isArray(tmp)){
            response={
                nombre: tmp[0].fldusuario_nombre,
                token: jwt.sign({
                    id:tmp[0].fldusuario_id
                },
                    functions.SECRET_KEY,
                    {expiresIn: "1h"})
            }
        }
        else{
            response=tmp;
        }
    }

    return response;
}

module.exports={
    login
}
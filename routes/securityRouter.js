const express=require("express");
const router=express.Router();
const securityService=require("../services/securityService");
const functions=require("../lib/functions");

const login=async(request, response) =>{
    try{
        const data=await securityService.login(request.body);
        response.status(200).json(data);
    }catch(error){
        response.status(500).json({error:error.message
        })
        console.log("falla");
    }
}

router.get("/", async(request, response) =>{
    try{    
        response.status(200).json({message:"API v1.0 programacion web 2"})
    }catch(error){
        response.status(500).json({error:error.message
        });
    }
});

router.post("/login",login);

/*router.get("validarToken", functions.verifyToken, async (request, response) => {
    return response.status(200).json({id: request.id});
});*/

module.exports=router;

const connection=require("../lib/connection");

const login=async(data) =>{
    return new Promise((resolve,reject) =>{
        connection.connect((error) =>{
            if(error){
                reject(error)
            }
            else{
                let query="SELECT fldusuario_id, fldusuario_nombre FROM tblusuario WHERE fldusuario_login = $1 and fldusuario_password =$2";
                connection.query(query,data,async(err,resultSet) =>{
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(resultSet.rows);
                    }
                })
            }
        })
    });
}

module.exports={
    login
}
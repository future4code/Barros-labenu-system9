import { Request, Response } from "express"
import connection from "../database/connection";
import app from "../app";



 function getTurma (){

app.get("/turma", async (req: Request, res: Response): Promise<void> => {
    const Id = req.query.id;
    const nome = req.query.nome; 
    const docentes = req.query.docentes; 
    const estudantes = req.query.estudantes; 
    const modulo = req.query.modulo
    let result;

    try {
        if (Id) {
            result = await connection.raw(

                `
                SELECT * FROM Turma
                WHERE Turma=${Id}
            `
            )

        } else {
            result = await connection.raw(

                `
                    SELECT * FROM Turma
                   
                `
            )
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error.message);

    }

})

 }

export default getTurma
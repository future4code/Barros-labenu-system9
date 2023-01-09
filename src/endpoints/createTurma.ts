import { Request, Response } from "express";
import connection from "../database/connection";
import { Turma } from "../class/Turma";

export const createTurma = async (req:Request, res: Response) => {
    let errorCode = 400 

    try{
        const id = req.body.id
        const nome = req.body.nome 
        const docentes = req.body.docentes
        const estudantes = req.body.estudantes
        const modulo = req.body.modulo

        if(!id || !nome || !docentes || estudantes || modulo){
                throw new Error("Body inválido")
        }

        const newTurma = new Turma (id, nome, docentes, estudantes, modulo)
        
        await connection("Escola").insert(newTurma)
        
        res.status(201).send({message:"Usuário Criado com sucesso!!", user:newTurma})

    }catch(error){
        res.status(errorCode).send({ message: error})
    }
}


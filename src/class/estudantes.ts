import { Pessoa } from "./pessoa";

export class estudantes extends Pessoa{
    hobbies:string[];
    constructor(
        id:string, 
        nome:string, 
        email:string, 
        dataNascimento: Date, 
        turma:string, 
        hobbies:string[]
    ){
        super(id, nome, email, dataNascimento,turma)
        this.hobbies =hobbies
    } 
} 
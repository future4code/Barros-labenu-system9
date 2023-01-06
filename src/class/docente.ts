import { Pessoa } from "./pessoa";

export class docente extends Pessoa{
    especialidades: string[];
    constructor(
        id:string, 
        nome:string,  
        email:string, 
        dataNascimento:Date, 
        turma:string){

        super(id, nome, email, dataNascimento, turma)
        this.especialidades = this.especialidades
}
   
}
export class Turma {
    id: string; 
    nome: string; 
    docentes: string [];
    estudantes: string []; 
    modulo: string;

    constructor(
        id: string, 
        nome: string, 
        docentes: string [], 
        estudantes: string [],
        modulo: string,
    ){
        this.id = id;
        this. nome = nome;
        this.docentes = docentes;
        this.estudantes = estudantes;
        this.modulo = modulo;
    }
}
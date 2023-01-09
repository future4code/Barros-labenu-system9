import app from "./app";
import { Turma } from "./class/Turma";
import { createTurma } from "./endpoints/createTurma";
import { ping } from "./endpoints/ping";
import getTurma from "./endpoints/getTurma";


const turma1 = new Turma (`001`, "Primeiro Ano A", [`Jack`, `Esmeralda`, ` Ellen`], [`Alisson Almeida`, `João de Almeida`, `Ana Maria Vergara`], `I`)

const turma2 = new Turma (`002`, "Primeiro Ano B", [`Eliana`, `Jaciara`, `Fagner`], [`Aline Souza Silva`, `Mara de Almeida`, `Gerson Batista`], `II`)


console.log(turma1);
console.log(turma2);
console.log(getTurma)

// Exercício 2 - Get users
app.get("/turma", getTurma)

app.get("teste", ping)
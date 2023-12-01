class Pessoa
{
    #nome
    #dataNasc

    /**
     * 
     * @param {string} pNome 
     * @param {number} pDataNasc 
     */

    constructor(pNome, pDataNasc){
        this.#nome = pNome
        this.#dataNasc = pDataNasc
    }
    get nome() {
        return this.#nome
    }

    get dataNasc() {
        return this.#dataNasc
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    set dataNasc(novoDataNasc) {
        this.#dataNasc = novoDataNasc
    }

    calcularIdade(){
        return `A idade de ${this.#nome} é ${2023 - this.#dataNasc } anos.`
    }
}


class Aluno extends Pessoa {
    #curso;

    constructor(pNome, pDataNasc, pCurso){
        super(pNome, pDataNasc);
        this.#curso = pCurso;
    }

    get curso() {
        return this.#curso;
    }

    set curso(novaCurso) {
        this.#curso = novaCurso;
    }
}

let aluno = new Aluno('Henry', 2002, 'Desenvolvimento de sistema');
console.log(aluno);
console.log(aluno.calcularIdade());
console.log(aluno.curso);
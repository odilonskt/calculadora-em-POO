class Calculadora{
    constructor(resId){
        this.res = document.getElementById(resId)
        this.expressao = '';
    }

adicionarValor(value){

    if(['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(this.expressao.slice(-1))){
        return;
    }
    this.expressao += value;
    this.atualizarDisplay();
};

calcular(){
    try{
        let resultado = eval(this.expressao);
        this.expressao = resultado.toString();
        this.atualizarDisplay()
    }catch(error){
        this.res.innerText = "Erro";
    }
};
limpar(){
    this.expressao = '';
    this.atualizarDisplay();
}

deletar(){
 this.expressao = this.expressao.slice(0,-1);
 this.atualizarDisplay()
}

atualizarDisplay(){
    this.res.innerText = this.expressao || "0";
}

}


const calculadora = new Calculadora('res');

const botoes = document.querySelectorAll('.sessaodois__botoes');

botoes.forEach(botao=>{
botao.addEventListener('click',(evento)=>{
    const valor = evento.target.value
    if(valor === "="){
        calculadora.calcular()
    }else if(valor === "clr"){
        calculadora.limpar()
    }else if(valor === "DEL"){
        calculadora.deletar();
    }else{
        calculadora.adicionarValor(valor)
    }
})
})

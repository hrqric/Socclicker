const elementValue = document.getElementById('txt-count');
const PerSecond_Element = document.getElementById('txt-ShootPerSecond');
console.log(elementValue);
console.log(parseInt(elementValue.textContent));


let goal_ps_multiplier = 0;
let goal_onClick_multiplier = 0;
let goal_onClickValue = 1
let ascendence_multiplier = 0 

function extrairNumero(texto){
    const numero = parseFloat(texto.textContent);
    console.log(numero);

    return numero;
}


function incrementar(){

    const now_goal_value = extrairNumero(elementValue);
    const incrementValue = now_goal_value + 1;

    elementValue.textContent = `${incrementValue} Gols`
    console.log(incrementValue);

}

function comprar(item){
    item.display = none;
    
}
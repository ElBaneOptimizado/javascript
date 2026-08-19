function calcular(){

    let elementoNum1 =
    document.getElementById("num1");
    let elementoNum2 = 
    document.getElementById("num2");
    let elementoResultado = 
    document.getElementById("resultado");

    let n1 = parseFloat(elementoNum1.value);
    let n2 = parseFloat(elementoNum2.value);

    let True = n1 > n2;
    elementoResultado.textContent = True;

    let False = n1 > n2;
    elementoResultado.textContent = False;
}
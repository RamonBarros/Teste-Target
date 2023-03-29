fibonacci = (numero) => {
    let fibonacciResult = [0, 1];//A sequencia sempre vai começar com 0 e 1, portanto inicia o vetor que guardará a sequencia com 0 e 1
    let result = 0;//Inicia a variavel que guardará o resultado
    let count = 2;// contador usado para auxiliar no preenchimento do vetor, começa por 2, pois as duas primeiras posições do vetor já estão preenchidas 
    let belongs=false;//flag que indicará se o numero pertence ou não a sequencia
  
    while (result <= numero) {//calcula a sequencia até que o ultimo resultado seja menor do que o numero informado.
      result = fibonacciResult[count - 2] + fibonacciResult[count - 1];
      //Faz a soma dos ultimos dois elementos
      if (result <= numero) {//Verifica se o resultado é menor do que o numero informado
        fibonacciResult[count] = result;//caso positivo guarda o valor
        belongs = result==numero ? true:false; //verifica se o resultado é igual ao resultado, caso positivo seta a flag para true
      }
      count++;
    }

    return belongs ? "O numero pertence a sequência de Fibonacci: \n" + fibonacciResult  : "O numero não pertence a sequência de Fibonacci \n"+fibonacciResult;

  }
  
  console.log(fibonacci(64));//Numero informado direto no código
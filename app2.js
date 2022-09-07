var readline = require('readline-sync');

let dados = []; 



fLerValores = () =>{

    console.log('Bem Vindo! \n');
    let altura = 0; peso = 0; imc = 0; n = 0; continuar ='N';
  
    do{
        n++
        var pessoa = new Object;
        pessoa.nome = readline.question(('Informe seu nome: '));
        
        pessoa.altura = fLerAltura();
        //altura = pessoa.altura;

        pessoa.peso = fLerPeso();  

        //pessoa.imc =  fCalcularIMC(pessoa.altura,pessoa.peso);
        pessoa.imc =  fCalcularIMC(pessoa);

        pessoa.classificacao = fClassificacao(pessoa.imc);


        //peso = pessoa.peso;
        //fCalcularIMC(altura,peso);
        //pessoa.imc = imc;              //fCalcularIMC();  //pessoa.imcValor = parseFloat(pessoa.peso/(pessoa.altura*pessoa.altura));
        //imc = pessoa.imc;

        //pessoa.imcClassif = fClassificacao();

        //console.log('Seu peso é: '+pessoa.peso+' Sua altura é: '+pessoa.altura);
        //console.log('Seu IMC é: '+pessoa.imcValor);
        //console.log('O valor de IMC indica que o peso esta '+ imcClassif + '!');

        dados.push(pessoa);
        continuar = String(readline.question('\nVoce deseja fazer outra verificacao? [S/N]')).toUpperCase();

    }while (continuar== 'S');

    console.log('\nObrigado! Ate logo!');       

}       

fCalcularIMC_orig = () => {
    for(i = 0; i <= dados.length; i++){
        var pessoa = dados[i];
        pessoa.imc = parseFloat(pessoa.peso/(pessoa.altura*pessoa.altura));  //.toFixed(2)
        dados[i] = pessoa;
    }
}

fCalcularIMC = (pess) => {
      
    return parseFloat(pess.peso/(pess.altura*pess.altura));  
   
}

fClassificacao = (imc) =>{
    const m1 = 18.5; m2 = 24.9; 

    if (imc < m1){
             return  "abaixo do esperado";
    }else if (imc >= m1 && imc <= m2){
            return  "normal";
    }else if (imc > m2){
        return "acima do esperado";
    }

}

fLerAltura = () =>{
    let altura;
    do {
        altura = readline.question('Informe sua altura: ');
        if (isNaN(altura) || altura < 0){
            console.log('Valor invalido!');
        }
    } while (isNaN(altura) || altura < 0);
    return parseFloat(altura);
}
fLerPeso = () =>{
    let peso;
    do {
        peso = readline.question('Informe seu peso em Kg: ');
        if (isNaN(peso) || peso < 0){
            console.log('Valor invalido!')
        }
    } while (isNaN(peso) || peso < 0);
    return parseFloat(peso);
}
 
fMostraVAlores = () =>{

        for(i=0; i<dados.length;i++){

            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            console.log('Nome: '+dados[i].nome+
                        '\nAltura: '+dados[i].altura+
                        '\nPeso: '+dados[i].peso+
                        '\nIMC: '+dados[i].imc.toFixed(2)+
                        '\nClassificao: '+dados[i].classificacao);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        }

}


fLerValores();
fMostraVAlores();
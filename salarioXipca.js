import dados from "readline-sync";
console.log("======== Escolha uma das alternativas ========\n");
console.log("1 - Listar salarios de 2010 à 2020");
console.log("2 - Listar índice de IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log("4 - Comparação do seu salaraio com os salario de 2010-2020");
var menu=dados.question("");

var info_comparacao=[
    {ano:2010, salario:510.00, ipca:5.91},
    {ano:2011, salario:545.00, ipca:6.50},
    {ano:2012, salario:622.00, ipca:5.84},
    {ano:2013, salario:678.00, ipca:5.91},
    {ano:2014, salario:724.00, ipca:6.41},
    {ano:2015, salario:788.00, ipca:10.67},
    {ano:2016, salario:880.00, ipca:6.29},
    {ano:2017, salario:937.00, ipca:2.95},
    {ano:2018, salario:954.00, ipca:3.75},
    {ano:2019, salario:998.00, ipca:4.31},
    {ano:2020, salario:1045.00, ipca:4.52}
]
let salario_passado=0;

switch (menu){
    case "1": //LISTAR SALARIOS//
        for(let info of info_comparacao){
            let ano=info.ano;
            let salario=info.salario;
            salario=salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 }); //formatar para valores monetarios.
            console.log("Ano:".padEnd(20,".") + ano);
            console.log("Salário:".padEnd(20,".") + "R$ " + salario + "\n");
        }
        break;

    case "2": //Listar indice de IPCA
        for(let info of info_comparacao){
            let ano=info.ano;
            let ipca=info.ipca;
            ipca=ipca.toLocaleString("pt-BR", { minimumFractionDigits: 2 }); //formatar para valores monetarios.
            console.log("Ano:".padEnd(20,".") + ano);
            console.log("IPCA:".padEnd(20,".") + ipca + "%\n");
        }
        break;
    case "3"://COMPARAÇÃO
        
        for(let info in info_comparacao){
            let ano=info_comparacao[info].ano;
            let salario=info_comparacao[info].salario;
            let dif_salarial=((salario-salario_passado)*100)/salario;
            let ipca=info_comparacao[info].ipca;

            if(salario_passado==0){//PARA GARANTIR INICIALIZAÇÃO CORRETA//
                dif_salarial=0;
            }
            salario_passado=salario;

            //CORREÇÃO DE FORMATO DE VALORES//
            salario=salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
            ipca=ipca.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
            //IMPRESSÕES//
            console.log("Ano:".padEnd(30,".") + ano);
            console.log("Salário:".padEnd(30,".") + "R$ " + salario);
            console.log("Crescimento Salarial ".padEnd(30,".")+dif_salarial.toFixed(2)+"%");
            console.log("IPCA:".padEnd(30,".") + ipca + "%\n");
        }
        break;
    case "4":
        var sal_usuario=dados.question("Digite o seu salario: ");
        var ano_usuario=dados.question("Digite o ano: ");
        for(let info in info_comparacao){
            let ano=info_comparacao[info].ano;
            if(ano==ano_usuario){
                let salario=info_comparacao[info].salario;
                let difsalarial=((sal_usuario-salario)*100)/sal_usuario;
                console.log("Salário base do ano:".padEnd(30,".") + "R$ " + salario);
                console.log("A diferença de salario é de "+difsalarial.toFixed(2)+"%");
                if(difsalarial>0){
                    difsalarial=sal_usuario-salario;
                    console.log("A diferença é de R$ "+difsalarial+",00 a mais que o salario mínimo do ano.");
                }
                else{
                    difsalarial=sal_usuario-salario;
                    console.log("A diferença é de R$"+difsalarial+",00 a menos que o salario mínimo do ano.");
                }
            }
        }
        break;
}
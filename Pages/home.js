//Obeter e validar o cpf//
var cpfelement = document.getElementById('cpf');
//Executar a validação e apresentar ao usuário o valor//
function verificar() {
   let cpf = cpfelement.value;
   if (cpf.length == 11) {
      let separarcpf = cpf;
      let parte1, parte2, parte3, parte4;
      parte1 = separarcpf.substring(0, 3);
      parte2 = separarcpf.substring(3, 6);
      parte3 = separarcpf.substring(6, 9);
      parte4 = separarcpf.substring(9, 11);
      let ponto1, ponto2, ponto3, total1, total2, total3 ;
      ponto1 = ".", ponto2 = ".", ponto3 = "-";
      total1 = parte1 + ponto1;
      total2 = parte2 + ponto2;
      total3 = parte3 + ponto3;
      let resultado = total1 + total2 + total3 + parte4;
      cpfelement.value = resultado;
         if (resultado.length == 14) {
            //Redirecinar para próxima página//
            window.location.replace('file:///C:/Users/Usuário/Documents/Site%201/Pages/criarcontapage.html');
         }else {
            document.getElementById('res').innerHTML = 'CPF incorreto';
         }
      //Direcionar para a página de criação de conta//
   }else {
      document.getElementById('res').innerHTML = 'CPF incorreto';
   }
};
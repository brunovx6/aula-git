  function showCPF()
{
    $("#divcpf").show();
    $("#divcnpj").hide();
}
function showCNPJ()
{
    $("#divcnpj").show();
    $("#divcpf").hide();
}

$(document).ready(function()
{

    $("#radiocpf").click(function(){
    	showCPF();
    });

    $("#radiocnpj").click(function(){

        showCNPJ();
    });

    showCPF();
    
    $("#cpf").mask("999.999.99-99");
    $("#cnpj").mask("99.999.999/9999-99");

    $("input").focusout(function Verifica(){
    var $senha = $('#senha');
    var $confirm = $('#confirm');
    var valSenha = $senha.val();
    var valConfirm = $confirm.val();


      if(valSenha.length < 6  && valSenha.length >=1 || valSenha.length > 11){
        $senha.removeClass("certo");
        $senha.addClass("erro");
      }
      else if(valSenha.length >=1){
          $senha.removeClass("erro");
          $senha.addClass("certo");
          if(valSenha == valConfirm){
            $confirm.removeClass("erro");
            $confirm.addClass("certo");
        }
        else{
          $confirm.removeClass("certo");
          $confirm.addClass("erro");
        }
      }

    });

});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var url_string = window.location.href;
var url = new URL(url_string);
var codigo = url.searchParams.get("CODIGO");
var nome = url.searchParams.get("NOME");
var und = url.searchParams.get("UND");
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();
var dataAtual = dia + "/" + mes + "/" + ano;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function salvar() {
    var quantidade = $('#QTDTIRADA').val();
    var centroCusto = $('#centro').val();
    var n = $('#numero').val();
    $('#CorpoTabela').html("");
    $('#CorpoTabela').append(
        '<tr>' +
        '<td>' + n + '</td>' +
        '<td>' + codigo + '</td>' +
        '<td>' + nome + '</td>' +
        '<td>' + und + '</td>' +
        '<td>' + quantidade + '</td>' +
        '<td>' + centroCusto + '</td>' +
        '<td>' + dataAtual + '</td>' +
        '</tr>'

    );
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function enviarRequisicao(){
    //redirecionar para ListarRequisicao.html
    window.location.href = "ListarRequisicoes.html";
}
//index.html?CODIGO=32123123&NOME=CAIXA&UND=PC









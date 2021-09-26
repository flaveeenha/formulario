function enviar(){
    // Procura a os campos obrigatorios
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf = document.getElementById("cpf");
    var cel = document.getElementById("cel");
    var endereço = document.getElementById("endereço");

    // Verificar se o valor da variavel nome está vazio
    if (nome.value == "") {
        // Alerta o usuario do campo obrigatorio
        alert("Nome é obrigatorio");
        // Move o focu para o campo
        nome.focus();
        return
    }  
        // Verificar se o valor da variavel nome está vazio
    if(sobrenome.value == "" ){
        // Alerta o usuario do campo obrigatorio
        alert("Sobrenome é obrigatorio");
        // Move o focu para o campo
        nome.focus();
        return
    }  
        // Verificar se o valor da variavel nome está vazio
    if(cpf.value == "" ){
        // Alerta o usuario do campo obrigatorio
        alert("CPF é obrigatorio");
        // Move o focu para o campo
        nome.focus();
        return
    }  
        // Verificar se o valor da variavel nome está vazio
    if(cel.value == "" ){
        // Alerta o usuario do campo obrigatorio
        alert("Telefone celular é obrigatorio");
        // Move o focu para o campo
        nome.focus();
        return
    }  
        // Verificar se o valor da variavel nome está vazio
    if(endereço.value == "" ){
        // Alerta o usuario do campo obrigatorio
        alert("Endereço é obrigatorio");
        // Move o focu para o campo
         nome.focus();
        return
        }  
    alert("Formulário enviado com sucesso!");
}
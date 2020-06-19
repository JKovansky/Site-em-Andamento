function validacao () {
    if(document.form.nome.value=="") {
        window.alert("Por favor, preencha o campo nome!!");
        document.form.nome.focus();
        return false;
    }

    else(document.form.email.value == "" || document.form.email.value.validacaodeformulariOf(' @ ')==-1 || document.form.email.value.validacaodeformularioOf('.')==-1) 
        alert("Por favor, digite um endereço de e-mail válido.")
        document.form.email.focus();
        return false;
    }


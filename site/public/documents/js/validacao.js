function logar() {
	var email = login_email;
	var senha = login_senha;

	if (email.value == 'rpg') {
		email.classList.remove("border-danger","text-danger");
		if (senha.value == '123') {
            alert("foi")
			location.href="/users";
		} else {
			senha.classList.add("border-danger");
			alert('Senha incorreta.');
            senha.focus();
		}
	} else {
		email.classList.add("border-danger","text-danger");
		alert('Email inexistente.');
        email.focus();
	}
}

function cadastrar() {
	var nome = cadastro_nome;
	var email = cadastro_email;
	var sexo = document.getElementsByName("cadastro_sexo");
	var senha = cadastro_senha;
	var confirmar_senha = cadastro_confirmar_senha;

	filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var ok = '';

	// validação do nome
	if (nome.value == '') {
        nome.classList.add("border-danger");
        alert_nome.innerHTML = '*Você precisa colocar seu nome!';
    }else if (nome.value.length <= 2) {
        nome.classList.add("border-danger");
        alert_nome.innerHTML = '*Seu nome deve ter mais que duas letras.';
    }else{
    	nome.classList.remove("border-danger");
        nome.classList.add("border-success");
        alert_nome.innerHTML = '';
        ok += 'nome, ';
    }

	// validação do email
	if (email.value == '') {
        email.classList.add("border-danger");
        alert_email.innerHTML = '*Você precisa colocar um e-mail.';
    }else if (!filter.test(email.value)) {
        email.classList.add("border-danger");
        alert_email.innerHTML = '*Por favor, digite o e-mail corretamente!';
    }else{
    	email.classList.remove("border-danger");
        email.classList.add("border-success");
        alert_email.innerHTML = '';
        ok += 'email, ';
    }

	// validação do sexo
	for (var i = 0; i < sexo.length; i++) {
		if (sexo[i].checked) {
			sexo = sexo[i].value
		} else {
			sexo = 'indefinido';
		}
	}

	// validação da senha
	if (senha.value == '') {
        senha.classList.add("border-danger");
        alert_senha.innerHTML = '*Você precisa colocar uma senha!';
    }else if (senha.value.length < 8) {
        senha.classList.add("border-danger");
        alert_senha.innerHTML = '*A senha deve conter no minimo 8 caracteres.';
    }else{
    	senha.classList.remove("border-danger");
        senha.classList.add("border-success");
        alert_senha.innerHTML = '';
        ok += 'senha, ';
    }

	// validação da confirmação da senha
	if (confirmar_senha.value == '') {
        confirmar_senha.classList.add("border-danger");
        alert_confirmar_senha.innerHTML = '*Você precisa colocar uma senha!';
    }else if (senha.value != confirmar_senha.value) {
        confirmar_senha.classList.add("border-danger");
        alert_confirmar_senha.innerHTML = '*As senhas não coincidem!';
    }else{
    	confirmar_senha.classList.remove("border-danger");
        confirmar_senha.classList.add("border-success");
        alert_confirmar_senha.innerHTML = '';
        ok += 'confirmar_senha';
    }

    if (ok == 'nome, email, senha, confirmação de senha'){
    	alert('Você foi cadastrado.')
    }
}
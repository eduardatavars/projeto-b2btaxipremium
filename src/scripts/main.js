new WOW().init();

var CONTATO_WHATSAPP = '5531975471854';

$(document).ready(function() {
    $('#tel').mask('(00) 00000-0000', {
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            tel: 'Por favor, insira o seu telefone.',
            email: 'Por favor, insira o seu e-mail.',
            message: 'Por favor, insira a sua mensagem.'
        },
        submitHandler: function(form) {
            alert("Seus dados e mensagem foram enviados, obrigada pela preferência!");
            form.submit(); //envia o formulário
        },
        invalidHandler: function(form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a solicitação!")
        }
    })

    $('#btn-wpp').click(function() {
        var txt = 'Olá! Gostaria de agendar uma corrida.';

        let encode = encodeURI(txt);
        let URL = `https://wa.me/${CONTATO_WHATSAPP}?text=${encode}`;

        $("#btn-wpp").attr('href', URL);
    })
});
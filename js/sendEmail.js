/**
 * @name "sendEmail" - Responsável por enviar Email
 */
function sendEmail() {
    const loading = document.querySelector('.loading');

    loading.className = loading.className + ' show';

    const name = document.querySelector('.name').value;
    const assunto = document.querySelector('.assunto').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.mensagem').value;

    const msg = {
        from: "gustavo@assessoria.app",
        to: "caspirrogustavo@gmail.com",
        subject: assunto,
        text: `
            Nome de quem entrou em contato: ${name}
            Email de quem entrou em contato: ${email}

            Mensagem: ${message}
        `
    };

    fetch('https://fiap-sender.herokuapp.com/email/send',
        {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
            body: JSON.stringify(msg),
        }
    )
    .then(data => {
           console.log(data);
           alert("E-mail enviado com sucesso");
           loading.className = loading.className.replace('show', '')
    }).catch(err => {
        console.error(err);
        loading.className = loading.className.replace('show', '')
    });
}
/**
 * @name "sendEmail" - Responsável por enviar Email
 */
function sendEmail() {
    const loading = document.querySelector('.loading');

    loading.className = loading.className + ' show';

    const name = document.querySelector('.name').value;
    const subject = document.querySelector('.subject').value;
    const email = document.querySelector('.email').value;
    const message = document.querySelector('.message').value;

    const msg = {
        from: "gustavocaspirro@assessoria.app",
        to: "caspirrogustavo@gmail.com",
        subject: subject,
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
           loading.className = loading.className.replace('show', '');
           alert("E-mail enviado com sucesso");
    }).catch(err => {
        loading.className = loading.className.replace('show', '');
        console.error(`Mensagem de erro ${err}`);
    });
}
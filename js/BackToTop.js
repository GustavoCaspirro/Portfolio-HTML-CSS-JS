class BackToTop {
    constructor() {
        this.element = document.querySelector('.btn-back-to-top');
        this.element.addEventListener('click', this.handleClick.bind(event, this), this.element);
    }

    handleClick(instance, event) {
       console.log('Clicado!!', instance, event);

        event.view.scrollTo({ // Não suportado por alguns navegadores;
            top: 0,
            behavior: 'smooth'
        });

        // instance.interval = setInterval(() => {
        //     if(window.scrollY <= 0)
        //         return clearInterval(instance.interval);

        //     window.scrollTo(0, window.scrollY - 10)
        // }, 10)
    }
}
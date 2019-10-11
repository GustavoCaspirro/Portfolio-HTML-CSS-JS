class BackToTop {
    constructor() {
        this.element = document.querySelector('.btn-back-to-top');
        this.element.addEventListener('click', this.handleClick.bind(event, this), this.element);
    }

    handleClick(instance, event) {
        event.view.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
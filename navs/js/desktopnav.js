class desktopnav extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = "Help! This paragraph has changed!";
    }
}

window.customElements.define('desktopnav',desktopnav)




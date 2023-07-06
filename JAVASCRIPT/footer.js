class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <!--- Insert Footer Info here -->
        `
    }
}

customElements.define('my-footer', MyFooter);
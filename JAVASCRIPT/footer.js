class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <h5>Developed by Luis Feliz</h5>
            <p>*Links to my other sites*</p>
        `
    }
}

customElements.define('my-footer', MyFooter);
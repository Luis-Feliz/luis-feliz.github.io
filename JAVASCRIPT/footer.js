class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <h4><u>Developed by Luis Feliz</u></h4>
            <h5>Please reach out via any of the icons below or through my phone: 1(267)562-2810</h5>
            <a href="mailto: luisfeliz42100@gmail.com" target="_blank"><img src="IMAGES/gmail.png" alt="Gmail Pic" width="25" height="25" color: white></a>
            <a href="https://github.com/Luis-Feliz" target="_blank"><img src="IMAGES/github_black.png" alt="Github Pic" width="25" height="25"></a>            
            <a href="https://www.linkedin.com/in/luis-feliz" target="_blank"><img src="IMAGES/linkdin.png" alt="linkdin Pic" width="25" height="25"></a>
            <a href="https://twitter.com/LuisFel78699502" target="_blank"><img src="IMAGES/twitter.png" alt="Twitter Pic" width="25" height="25"></a>
            <a href="#" target="_blank"><img src="IMAGES/youtube.svg" alt=Youtube Pic" width="25" height="25"></a>
        `
    }
}

customElements.define('my-footer', MyFooter);
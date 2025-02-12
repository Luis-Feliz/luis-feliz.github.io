class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
            <h4><u>Developed by Luis Feliz</u></h4>
            <a href="mailto: luisfeliz42100@gmail.com" target="_blank"><img src="IMAGES/gmail_white.png" alt="Gmail Pic" width="25" height="25" color: white></a>
            <a href="https://github.com/Luis-Feliz" target="_blank"><img src="IMAGES/github.png" alt="Github Pic" width="25" height="25"></a>            
            <a href="https://www.linkedin.com/in/luis-feliz" target="_blank"><img src="IMAGES/linkdin_white.png" alt="linkdin Pic" width="25" height="25"></a>
            <a href="https://twitter.com/LuisFel78699502" target="_blank"><img src="IMAGES/twitter_white.png" alt="Twitter Pic" width="25" height="25"></a>
            <a href="#" target="_blank"><img src="IMAGES/youtube_white.png" alt=Youtube Pic" width="25" height="25"></a>
            <a href="https://luis-feliz.itch.io/one-way-ticket" target="_blank"><img src="IMAGES/itchioLOGO.png" alt=Youtube Pic" width="25" height="25"></a>
        `
    }
}

customElements.define('my-footer', MyFooter);
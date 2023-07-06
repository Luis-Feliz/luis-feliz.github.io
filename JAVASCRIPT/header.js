class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `   
        <div class="button">
            <a href="index.html" class="button">Home Page</a>
        </div>
                    
        <div class="dropdown">
            <button class="dropbtn"><strong>Portfolio</strong></button>
            <div class="dropdown-content">
                <a href="GamingProject.html">Gaming Projects</a>
                <a href="CodingProject.html">Coding Projects</a>
                <a href="ArtProject.html">Art Projects</a>
                <a href="MusicProject.html">Music Projects</a>
                <a href="Future.html">Future Projects</a>
            </div>
        </div>
                   
        <div class="button">
            <a href="AboutMe.html" class="button"> About Me</a>
        </div>
                    
        <div class="button">
            <a href="ContactMe.html" class="button">Contact Me</a>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader);

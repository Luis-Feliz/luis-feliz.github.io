class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `   
            <table>
                <tr>
                    <th>
                        <div class="button">
                            <a href="index.html" class="button">Home Page</a>
                        </div>
                    </th>  <!-- 1 -->
                    <th>
                        <div class="dropdown">
                            <button class="dropbtn"><strong>Portfolio</strong></button>
                            <div class="dropdown-content">
                                <a href="GamingProject.html">Gaming Projects</a>
                                <a href="CodingProject.html">Coding Projects</a>
                                <a href="ArtProject.html">Art Projects</a>
                                <a href="MusicProject.html">Music Projects</a>
                                <a href="Future.html">What I am Working on now</a>
                            </div>
                        </div>
                    </th>  <!-- 2  -->
                    <th>
                        <div class="button">
                            <a href="AboutMe.html" class="button"> About Me</a>
                        </div>
                    </th>  <!-- 3 -->
                    <th>
                        <div class="button">
                            <a href="ContactMe.html" class="button">Contact Me</a>
                        </div>
                    </th>  <!-- 4 -->
                </tr>
            </table>
        `
    }
}

customElements.define('my-header', MyHeader);

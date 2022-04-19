// HTML TEMPLATES
const template = document.createElement('template');
template.innerHTML = `
<style>
    .matcha-card{
        font-family: 'Arial',sans-serif;
        border-radius: 8px;
        background: white;
        width:512px;
        display:grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 8px;
        margin-bottom:16px;
        box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 3%),
                    0px 2px 2px 0px rgb(0 0 0 / 3%),
                    0px 2px 2px 0px rgb(0 0 0 / 3%);
        overflow:hidden;
    }

    .matcha-card img{
        width:100%;
    }

    .matcha-card button{
        cursor:pointer;
        background: #ff7500;
        font-size: 16px;
        font-weight:700;
        padding: 0 32px;
        border-radius: 8px;
        line-height: 32px;
        border:none;

    }
</style>
<div class="matcha-card">
    <div><slot name="image"/></div>
    <div>
        <h3><slot name="first" /></h3>
        <div class="info">
            <p><slot name="email" /></p>
            <p><slot name="phone" /></p>
        </div>
        <button id="toggle-info">Hide Info</button>
    </div>
</div>
`;

// CUSTOM ELEMENT
class MatchaCard extends HTMLElement{

    showInfo = true;    

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo(){
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');
        this.showInfo = !this.showInfo;
        this.showInfo ?
         (info.style.display = 'block', toggleBtn.innerText = 'Hide Info') :
         (info.style.display = 'none', toggleBtn.innerText = 'Show Info')
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener();
    }

   
}

window.customElements.define('matcha-card', MatchaCard);
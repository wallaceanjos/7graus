# 7graus Challenge
Optei por usar o Angular para fazer a view com os componentes do Angular Material
O gerenciamento de pacotes com npm

## Get Started
- git clone
- npm i
- ng s
- ng test


## Custom Element (WebComponent)

Foi colocado dentro da pasta src/app/components/random-person

O custom element foi um card com uma funcionalidade de exibir e ocultar informações(toggle)

O script foi adicionado no angular.json

Como Usar:
```html
<matcha-card name="item.results[0].name.first" avatar="item.results[0].picture.large">
          <!-- <div slot="image">{{item.results[0].picture.large}}</div> -->
          <div slot="first">{{item.results[0].name.first}}</div>
          <div slot="email">{{item.results[0].email}}</div>
          <div slot="phone">{{item.results[0].phone}}</div>
        </matcha-card>

```
Esse é o Custom element

Vou deixar o código abaixo para facilitar a inspeção

```javascript
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
```

## GetRandomUser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

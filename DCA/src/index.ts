import "./components/export"
import {getPicture}  from './services/data/data'
import {getCoolText}  from './services/data/data'
import css from './index.css'
import PictureCat from "./components/PictureCat.ts/PictureCat"

export enum Attribute {
    'image'= 'image',
    'text' = 'text'
}

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const cats = await getPicture('');
        console.log(cats);

        

        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = /*html*/`
            <style>
            ${css}
            
            </style>
            <h1>Cats Facts</h1>
            `;
            const button = this.ownerDocument.createElement('button');
            button.textContent = 'Show Catties';
            button?.addEventListener('click', async () => {
                const largeText = await getCoolText();
                console.log(largeText);

                const cutNewText = largeText.split(" ", 4);
                console.log(cutNewText);

                cutNewText.join();
                const card = this.ownerDocument.createElement('custom-cat');
                card.setAttribute(Attribute.text, largeText);
                this.shadowRoot?.appendChild(card);
            });
            this.shadowRoot.appendChild(button);
        }

        
    }

}

customElements.define('app-container', AppContainer)
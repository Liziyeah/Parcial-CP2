export enum Attribute {
    'image'= 'image',
    'text' = 'text'
}

class PictureCat extends HTMLElement {
    image?: string
    text?: string

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        const attrs: Record <Attribute, null> = {
            image: null,
            text: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback (propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML =  `
            <img src="${this.image}" alt="Foto de catto">
            <p>${this.text}</p>
            `
        }
        
    }
}

export default PictureCat;
customElements.define('custom-cat', PictureCat);

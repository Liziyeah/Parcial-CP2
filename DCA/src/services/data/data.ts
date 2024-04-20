interface DataShape {
    'text': string
}

export const getPicture = async(text: string) => {
    try {
        const getPicture = await fetch(`https://cataas.com/cat/says/${text}`).then((result) => result.json())
        return getPicture;
    }catch(error) {
        console.log(error)
    }
}

export const getCoolText = async() => {
    try {
        const getCoolText = await fetch('https://catfact.ninja/fact').then((result) => result.json())
        return getCoolText.fact;
    }catch(error) {
        console.log(error)
    }
}


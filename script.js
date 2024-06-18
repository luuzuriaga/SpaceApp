
const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=6AU7fwPVCdnzZIImtKMKrwrkEhWtvCnY37jy8y7I"; 

async function listaImagenes() {
    
    try {
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();
        

        const card = document.querySelector("[data-ul]");

        datosImagenes.photos.slice(0, 15).forEach(elemento => {
            const contenido = `
                <li class="card">
                    <img class="card__image" src="${elemento.img_src
                    }" alt="imagen" class="card_image">
                    <h3 class="card__title">${elemento.camera.full_name}</h3>
                    </img>
                </li>
            `;
            card.innerHTML = card.innerHTML + contenido; // Usar += en lugar de card.innerHTML = card.innerHTML + contenido
        });
    } catch (error) {
        console.log(error);
    }
}


    listaImagenes();



document.addEventListener('DOMContentLoaded', () => {
   
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const tarjetasContainer = document.getElementById('tarjetas-container');

            data.forEach(producto => {
                const tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta');
                tarjeta.innerHTML = `
                    <h3>${producto.title}</h3>
                    <p>Precio: $${producto.price}</p>
                    <img src="${producto.image}" alt="${producto.title}">
                    <div class="opciones">
                        <button class="boton-comprar">Comprar</button>
                        <button class="boton-ver-detalles">Ver detalles</button>
                        <button class="boton-devolver">Devolver</button>
                    </div>
                `;
                tarjetasContainer.appendChild(tarjeta);

                
                const botonComprar = tarjeta.querySelector('.boton-comprar');
                const botonVerDetalles = tarjeta.querySelector('.boton-ver-detalles');
                const botonDevolver = tarjeta.querySelector('.boton-devolver');

                botonComprar.addEventListener('click', () => {
                    console.log(`Producto "${producto.title}" comprado`);
                });

                botonVerDetalles.addEventListener('click', () => {
                    console.log(`Ver detalles del producto "${producto.title}"`);
                });

                botonDevolver.addEventListener('click', () => {
                    console.log(`Producto "${producto.title}" devuelto`);
                    document.addEventListener('DOMContentLoaded', () => {
    
    const imagen = document.querySelector('.tarjeta img');

    
    const gradiente = document.createElement('div');
    gradiente.classList.add('gradiente'); 

    
    gradiente.style.background = 'linear-gradient(to bottom, #FFD700, #FFA500)';

    
    imagen.parentNode.insertBefore(gradiente, imagen);

    
    gradiente.style.animation = 'gradientMove 5s infinite alternate'; 
});


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes gradientMove {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 0% 100%;
        }
    }
`);

                    
                });
            });
        })
        .catch(error => {
            console.log('Error al obtener datos de la API:', error);
        });
});







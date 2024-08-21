// Supongamos que tienes un array de productos con la siguiente estructura:

  // Función para mostrar los productos
  function showProducts() {
    const productsContainer = document.getElementById("products-container");
    products.forEach((product) => {
      const productHTML = `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Precio: $${product.price}</p>
        </div>
      `;
      productsContainer.innerHTML += productHTML;
    });
  }
  
  // Llamamos a la función para mostrar los productos
  showProducts();

  let tabInputs = document.querySelectorAll(".tabInput");

  tabInputs.forEach(function(input){

      input.addEventListener('change', function(){
          let id = input.ariaValueMax;
          let thisSwiper = document.getElementById('swiper' + id);
          thisSwiper.swiper.update();
      })
  });





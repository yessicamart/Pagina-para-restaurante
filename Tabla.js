 // Productos en formato JSON
      var products = [
        {
          "name": "Elisyum",
          "description": "Carne de res a la parrilla con lechuga, tomate y queso cheddar en un pan recién horneado.",
          "price": 29.99,
          "image": "imagenes proyecto/pla1.png"
        },
        {
          "name": "Bienmesabe",
          "description": "Salsa de tomate, mozzarella fresca y albahaca sobre una masa fina y crujiente.",
          "price": 49.99,
          "image": "imagenes proyecto/pla2.png"
        },
        {
          "name": "sunshulla",
          "description": "Lechuga romana, pollo a la parrilla, parmesano rallado y crutones de pan con aderezo César.",
          "price": 19.99,
          "image": "imagenes proyecto/pla3.png"
        },
        {
          "name": "shanfayne",
          "description": "Ensalada de lechuga romana con pollo a la parrilla, queso parmesano y aderezo César",
          "price": 29.99,
          "image": "imagenes proyecto/pla4.png"
        },
        {
          "name": "Hamburguesa",
          "description": "Hamburguesa de carne con lechuga, tomate, queso y salsa especial.",
          "price": 10.99,
          "image": "imagenes proyecto/b1.png"
        }
      ];
      
      // Mostrar productos en la página
      var productHTML = '';
      for (var i = 0; i < products.length; i++) {
        productHTML += '<div class="products">';
        productHTML += '<div class="box-container">';
        productHTML += '<div class="box">';
        productHTML += '<div class=".box:nth-child">';
        productHTML += '<img src="' + products[i].image + '" alt="' + products[i].name + '">';
        productHTML += '<div class="product-txt">';
        productHTML += '<h2>' + products[i].name + '</h2>';
        productHTML += '<p>' + products[i].description + '</p>';
        productHTML += '<p>$' + products[i].price.toFixed(2) + '</p>';
        productHTML += '</div>';
      }
      document.getElementById('product-list').innerHTML = productHTML;
      
      // Encontrar producto de mayor precio
      var maxPriceProduct = products.reduce(function (prev, current) {
        return (prev.price > current.price) ? prev : current;
      });
      // Encontrar producto de menor precio
      var minPriceProduct = products.reduce(function (prev, current) {
        return (prev.price < current.price) ? prev : current;
      });
      
      // Mostrar producto de mayor precio
      var maxProductHTML = '<div class="product">';
      maxProductHTML += '<img src="' + maxPriceProduct.image + '" alt="' + maxPriceProduct.name + '">';
      maxProductHTML += '<h2>' + maxPriceProduct.name + '</h2>';
      maxProductHTML += '<p>' + maxPriceProduct.description + '</p>';
      maxProductHTML += '<p>$' + maxPriceProduct.price.toFixed(2) + '</p>';
      maxProductHTML += '</div>';
      document.getElementById('max-product').innerHTML = maxProductHTML;
      var minProductHTML = '<div class="product">';
      minProductHTML += '<img src="' + minPriceProduct.image + '" alt="' + minPriceProduct.name + '">';
      minProductHTML += '<h2>' + minPriceProduct.name + '</h2>';
      minProductHTML += '<p>' + minPriceProduct.description + '</p>';
      minProductHTML += '<p>$' + minPriceProduct.price.toFixed(2) + '</p>';
      minProductHTML += '</div>';
      document.getElementById('min-product').innerHTML = minProductHTML;

   
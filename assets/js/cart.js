document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product-card');
    const modalBody = document.querySelector('.modal-body');
    const cartCounter = document.querySelectorAll('.cart-count, #cart-counter');
    let cartItems = {};

    products.forEach(product => {
        const addButton = product.querySelector('.product-btn');
        addButton.addEventListener('click', function () {
            const productName = product.querySelector('.product-name').textContent;
            const productPrice = parseFloat(product.querySelector('.product-price').textContent.replace('$', ''));

            if (cartItems[productName]) {
                cartItems[productName].quantity += 1;
                cartItems[productName].totalPrice += productPrice;
            } else {
                const productImageSrc = product.querySelector('.product-image img').getAttribute('src');
                cartItems[productName] = {
                    quantity: 1,
                    totalPrice: productPrice,
                    imageSrc: productImageSrc
                };
            }

            updateCart();
        });
    });

    function updateCart() {
        let totalQuantity = 0;
        let totalItems = 0;
        let totalPrice = 0;

        modalBody.innerHTML = '';

        Object.keys(cartItems).forEach(key => {
            const product = cartItems[key];
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <div class="product-item-container">
                    <div class="product-item-image">
                        <img src="${product.imageSrc}" alt="${key}">
                    </div>
                    <div class="product-item">
                        <div class="product-item-info"> 
                            <p class="product-item-name">${key}</p>
                            <p class="product-item-total">$${parseFloat(product.totalPrice.toFixed(2))}</p>
                        </div>
                        <p class="product-item-quantity">${product.quantity} un</p>
                    </div>
                </div>
                <hr>
            `;
            modalBody.appendChild(productItem);
            totalQuantity += product.quantity;
            totalPrice += product.totalPrice;
        });

        cartCounter.forEach(counter => {
            counter.textContent = totalQuantity;
        });

        document.getElementById('cart-total').textContent = parseFloat(totalPrice.toFixed(2));
    }


});

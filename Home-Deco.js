$(document).ready(function () {
    fetch("home-deco-workshop.json")
        .then(response => response.json())
        .then(data => {
            const products = data["home-deco"].products;
            const all_deco = document.getElementById("all-deco");
            all_deco.innerHTML = '';

            for (let i = 0; i < products.length; i += 5) {
                const groupDiv = document.createElement('div');
                groupDiv.classList.add('product-group');
    
                for (let j = 0; j < 5 && (i + j) < products.length; j++) {
                    let product = products[i + j];
                    groupDiv.innerHTML += `
                        <div class="deco-item">
                            <div class="deco-box">
                                <div id="decobox-text">
                                    <p class="deco-name">${product.name}</p>
                                    <p class="deco-price">$${product.price}</p>
                                </div>
                            </div>
                            <img src="${product.image || 'placeholder-image.png'}" alt="${product.name}" id="deco-image">
                            <button class="add-to-cart">Add to Cart</button>
                            <div id="counter">
                                <button class="decopm-button" id="decrement">-</button>
                                <span id="counterValue">1</span>
                                <button class="decopm-button" id="increment">+</button>
                            </div>
                        </div>
                    `;
                }
    
                all_deco.appendChild(groupDiv);
            }
        })
});
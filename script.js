let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// Toggle the menu on click
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Remove the active class on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Loader functionality
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceDiv = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');

// Function to update the cart display
function updateCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += parseFloat(item.price);
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name} - Rs. ${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    totalPriceDiv.innerText = `Total: Rs. ${total.toFixed(2)}`;
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const itemName = this.getAttribute('data-item');
        const itemPrice = this.getAttribute('data-price');

        // Add new item to the cart
        cart.push({ name: itemName, price: itemPrice });
        
        // Save back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart display
        updateCart();

        // Notify user
        alert(`${itemName} added to cart!`);
    });
});

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to handle order placement
// Function to handle order placement
// Function to handle order placement
placeOrderButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        const userInfo = {
            name: document.querySelector('input[placeholder="name"]').value,
            mobile: document.getElementById('phone').value,
            timeSlot: document.querySelector('input[placeholder="time"]').value
        };

        // Save order details to localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        localStorage.setItem('orderItems', JSON.stringify(cart)); // Save items
        localStorage.setItem('orderTotal', cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)); // Save total
        localStorage.setItem('orderTime', userInfo.timeSlot); // Save selected time

        // Debugging output
        console.log('Order details saved:', {
            orderItems: cart,
            orderTotal: cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2),
            orderTime: userInfo.timeSlot
        });

        // Redirect to order slip page
        window.location.href = 'order-slip.html';
    }
});

// Initial cart display
updateCart();



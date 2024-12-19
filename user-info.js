document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const timeSlot = document.getElementById('timeSlot').value;
    
    // Assuming you have a way to get the cart items
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Display the order slip
    const slipDetails = `Name: ${name}<br>Mobile No: ${mobile}<br>Time Slot: ${timeSlot}<br>Items Ordered: ${cartItems.join(', ')}`;
    document.getElementById('slipDetails').innerHTML = slipDetails;
    document.getElementById('orderSlip').style.display = 'block';

    // Optionally, save the user info and items in local storage or send to a server
});

document.getElementById('confirmOrder').addEventListener('click', function() {
    // Here you can handle the QR code generation if needed
    alert('Order confirmed! QR code generated.');
    // Redirect or do other actions as needed
});

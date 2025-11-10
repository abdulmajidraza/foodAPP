let cart = [];

function addToCart(name, price) {
  // check if item already in cart
  const item = cart.find(i => i.name === name);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} x ${item.qty} - ₹${item.price * item.qty}</span>
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;
    cartDiv.appendChild(div);
  });

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('total').textContent = `Total: ₹${total}`;
}

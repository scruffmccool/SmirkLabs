const products = [
  {
    name: "Desk Cable Organizer",
    price: 14.99,
    image: "images/cable.jpg",
    buy: "https://www.paypal.me/SmirkLabs/14.99"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <a class="buy" href="${p.buy}">Buy Now</a>
    </div>
  `;
});

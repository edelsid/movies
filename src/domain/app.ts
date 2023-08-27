import Cart from "../cart";

const cart = new Cart;

cart.add({
    id: 999,
    name: 'TestName',
    price: 100,    
    year: 1995,
    country: 'United States',
    phrase: 'TestPhrase',
    genre: 'Action',
    time: '120 мин. / 2:00',    
});

console.log(cart.items)
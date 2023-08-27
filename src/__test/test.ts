import Cart from "../cart";
import Movie from "../domain/movies";

test ('empty cart', () => {
    const cart = new Cart;
    expect(cart.items.length).toBe(0);
});

test ('create movie', () => {
    const movie = new Movie (
        999,
        'TestName',
        100,    
        1995,
        'United States',
        'TestPhrase',
        'Action',
        '120 мин. / 2:00');
    expect(movie).toEqual({
        id: 999,
        name: 'TestName',
        price: 100,    
        year: 1995,
        country: 'United States',
        phrase: 'TestPhrase',
        genre: 'Action',
        time: '120 мин. / 2:00'
    })
});

test ('add movie', () => {
    const movie = new Movie (
        999,
        'TestName',
        100,    
        1995,
        'United States',
        'TestPhrase',
        'Action',
        '120 мин. / 2:00');
    const cart = new Cart;
    cart.add(movie);
    expect(cart.items).toContain(movie);
})
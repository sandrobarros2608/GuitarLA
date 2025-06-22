import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from "./hooks/useCart"

function App() {

  /* Cuando hacemos Hooks personalizados y los llamamos en otros componentes es como crear otra instancia */
  const { data, cart, isEmpty, cartTotal, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  return (
    <>
      <Header
        cart={cart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App

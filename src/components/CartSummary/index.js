// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      for (let i = 0; i < cartList.length; i += 1) {
        totalCost += cartList[i].price * cartList[i].quantity
      }
      return (
        <div className="cart-summary-container">
          <h1 className="cart-total-cost">
            Order Total: <span>Rs {totalCost}/-</span>
          </h1>
          <p className="total-items-count">{cartList.length} Items in cart</p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

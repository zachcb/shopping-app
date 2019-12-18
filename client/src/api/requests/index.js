// Should place in ENV
const API = "http://localhost:5500/api";

const createCart = async () => {
  try {
    const response = await fetch(`${API}/carts`, {
      method: "POST"
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const addCartItem = async ({ cartID, productID, quantity = 1 }) => {
  try {
    const response = await fetch(`${API}/carts`, {
      method: "POST",
      body: {
        cartID,
        productID,
        quantity
      }
    });

    const cartID = response.id;

    // Check to not re-render
    this.setState({ cartID });

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateCartItem = async ({ cartID, productID, quantity }) => {
  try {
    const response = await fetch(`${API}/carts`, {
      method: "POST",
      body: {
        cartID,
        productID,
        quantity
      }
    });

    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { createCart, addCartItem, updateCartItem };

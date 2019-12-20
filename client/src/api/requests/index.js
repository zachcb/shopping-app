import _ from "lodash";

import { convertObjectToCamel } from "../../utils/conversions";

// Should place in ENV
const API = "http://localhost:5500/api";

const createCart = async () => {
  try {
    const response = await fetch(`${API}/carts`, {
      method: "POST",
      headers: {
        contentType: "application/x-www-form-urlencoded"
      }
    });

    return convertObjectToCamel(await response.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

const addCartItem = async ({ cartID, productID, quantity = 1 }) => {
  const params = new URLSearchParams({
    "cart-id": cartID,
    "product-id": productID,
    quantity: quantity
  });

  try {
    const response = await fetch(`${API}/cart-items?${params}`, {
      method: "POST",
      headers: {
        contentType: "application/x-www-form-urlencoded"
      }
    });

    return convertObjectToCamel(await response.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateCartItem = async ({ cartID, productID, quantity }) => {
  const params = new URLSearchParams({
    "cart-id": cartID,
    "product-id": productID,
    quantity: quantity
  });

  try {
    const response = await fetch(`${API}/cart-items?${params}`, {
      method: "PUT",
      headers: {
        contentType: "application/x-www-form-urlencoded"
      }
    });

    return convertObjectToCamel(await response.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getCart = async ({ cartID }) => {
  const params = new URLSearchParams({
    "id": cartID
  });

  try {
    const response = await fetch(`${API}/carts?${params}`, {
      method: "GET",
      headers: {
        contentType: "application/x-www-form-urlencoded"
      }
    });

    return convertObjectToCamel(await response.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProducts = async () => {
  try {
    const response = await fetch(`${API}/products`, {
      method: "GET",
      headers: {
        contentType: "application/x-www-form-urlencoded"
      }
    });

    return convertObjectToCamel(await response.json());
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default {
  createCart: _.throttle(createCart, 1000),
  addCartItem: _.throttle(addCartItem, 1000),
  updateCartItem: _.throttle(updateCartItem, 500),
  getCart: _.throttle(getCart, 1000),
  getProducts: _.throttle(getProducts, 1000),
};

import React from "react";
import _ from "lodash";

import HomeTemplate from "../components/templates/Home";
import requests from "../api/requests";

class HomeView extends React.Component {
  constructor() {
    super();

    this.state = {
      cartID: "",
      cartItems: {},
      products: []
    };
  }

  componentDidMount() {
    // If does not have cart ID, then create cart.
    !this.checkHasCartID() && this.createCart();
    this.getProducts();
  }

  createCart = async () => {
    const response = await requests.createCart();
    const { cartID } = response.cart;

    this.setState({ cartID });
  };

  checkHasCartID = async () => {
    return !!this.state.cartID;
  };

  getProducts = async () => {
    const response = await requests.getProducts();
    const { products } = response;

    this.setState({ products });
  };

  handleAddCartItem = async ({ cartID, productID, quantity }) => {
    const response = await requests.addCartItem({ cartID, productID, quantity });
    const cartItems = {};

    _.forEach(response.cartItems, ({ id, ...item }) => {
      cartItems[id] = item;
    });

    this.setState({ cartItems });
  };

  handleUpdateCartItem = async ({ cartItemID, quantity }) => {
    const { cartItems } = this.state;
    const response = await requests.updateCartItem({ cartItemID, quantity });
    const updatedID = response.cartItem.id;

    cartItems[updatedID] = response.cartItem;

    this.setState({ cartItems });
  };

  render() {
    const { cartID, cartItems, products } = this.state;
    const { handleAddCartItem, handleUpdateCartItem } = this;
    const propsToPass = {
      cartID,
      cartItems,
      products,
      handleAddCartItem,
      handleUpdateCartItem
    };

    return <HomeTemplate {...propsToPass} />;
  }
}

export default HomeView;

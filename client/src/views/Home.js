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
    const { cartID } = await requests.createCart();

    this.setState({ cartID });
  };

  checkHasCartID = async () => {
    return !!this.state.cartID;
  };

  getProducts = async () => {
    const products = await requests.getProducts();

    this.setState({ products });
  };

  handleAddCartItem = async ({ cartID, productID, quantity }) => {
    const { cartItems } = await requests.addCartItem({ cartID, productID, quantity });
    const newCartItems = {};

    _.forEach(cartItems, ({ id, ...item }) => {
      newCartItems[id] = item;
    });

    this.setState({ cartItems: newCartItems });
  };

  handleUpdateCartItem = async ({ cartItemID, quantity }) => {
    const { cartItems } = this.state;
    const { cartItem } = await requests.updateCartItem({ cartItemID, quantity });
    const updatedID = cartItem.id;

    cartItems[updatedID] = cartItem;

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

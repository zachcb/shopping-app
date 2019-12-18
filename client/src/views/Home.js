import React from "react";
import _ from "lodash";
import HomeTemplate from "../components/templates/Home";

import requests from "../api/requests";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      cartID: "",
      cartItems: {}
    };
  }

  createCart = async () => {
    const response = await requests.createCart();
    const cartID = response.cart.cartID;

    this.setState({ cartID });
  };

  checkHasCart = async () => {
    return !!this.state.cartID;
  };

  handleAddCartItem = async ({ cartID, productID, quantity }) => {
    const response = await requests.addCartItem({ cartID, productID, quantity });
    const cartItems = {};

    _.forEach(response.cartItems, ({ id, ...item }) => {
      cartItems[id] = item;
    });

    this.setState({ cartItems });
  };

  handleRemoveCartItem = async ({ cartItemID }) => {
    const { cartItems } = this.state;
    const response = await requests.updateCartItem({ cartItemID, quantity: 0 });
    const removedID = response.cartItem.id;

    delete cartItems[removedID];

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
    return <HomeTemplate />;
  }
}

export default Home;

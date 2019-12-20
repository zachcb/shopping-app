import React from "react";
import _ from "lodash";

import HomeTemplate from "../components/templates/Home";
import requests from "../api/requests";

class HomeView extends React.Component {
  constructor() {
    super();

    this.state = {
      cartID: localStorage.getItem("SHOP_APP_CART_ID") || 0,
      cartItems: {},
      products: []
    };
  }

  async componentDidMount() {
    // If does not have cart ID, then create cart.
    const hasCartID = await this.checkHasCartID()
    hasCartID  ? this.getCart({ cartID: this.state.cartID }) : this.createCart();
    this.getProducts();
  }

  createCart = async () => {
    const { id: cartID } = await requests.createCart();
    localStorage.setItem("SHOP_APP_CART_ID", cartID)
    this.setState({ cartID });
  };

  getCart = async ({ cartID }) => {
    const { cartItems } = await requests.getCart({ cartID });
    const newCartItems = {};

    _.forEach(cartItems, (item) => newCartItems[item.id] = item);

    this.setState({ cartItems: newCartItems })
  };

  checkHasCartID = async () => {
    return !!this.state.cartID;
  };

  getProducts = async () => {
    const products = await requests.getProducts();

    this.setState({ products });
  };

  handleAddCartItem = async ({ cartID = this.state.cartID, productID, quantity }) => {
    const cartItem = await requests.addCartItem({ cartID, productID, quantity });
    const newCartItems = _.assign({}, this.state.cartItems);

    newCartItems[cartItem.products.id] = cartItem;

    this.setState({ cartItems: newCartItems });
  };

  handleUpdateCartItem = async ({ cartItemID, quantity }) => {
    const { cartItems } = this.state;
    const updatedCartItem = await requests.updateCartItem({ cartItemID, quantity });

    cartItems[updatedCartItem.id] = updatedCartItem;

    this.setState({ cartItems });
  };

  render() {
    const { cartItems, products } = this.state;
    const { handleAddCartItem, handleUpdateCartItem } = this;
    const propsToPass = {
      cartItems,
      products,
      handleAddCartItem,
      handleUpdateCartItem
    };

    return <HomeTemplate {...propsToPass} />;
  }
}

export default HomeView;

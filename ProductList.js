import React, { Component } from "react";
import "./ProductList.css";
import Product from "./Product";
import ProductForm from "./ProductForm";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.props.items };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  deleteItem(itemName, e) {
    let arr = this.state.items.filter((x) => x.name !== itemName);
    this.setState({ items: arr });
  }
  addItem(itemObj, e) {
    itemObj.qty = Number(itemObj.qty);
    let allItems = this.state.items;
    let found = false;
    for (let item of allItems) {
      if (
        item.name.trim().toLowerCase() === itemObj.name.trim().toLowerCase()
      ) {
        item.qty = item.qty + itemObj.qty;
        found = true;
        break;
      }
    }
    if (found) {
      this.setState({ items: allItems });
    } else {
      this.setState((currState) => ({
        items: [...currState.items, itemObj],
      }));
    }
  }
  render() {
    let plist = this.state.items.map((x) => (
      <Product key={x.name} item={x} remove={this.deleteItem} />
    ));
    return (
      <div className="ProductList">
        <h1>Your Shoppping Cart</h1>
        <div>
          <table>
            <tbody>{plist}</tbody>
          </table>
        </div>
        <hr />
        <div>
          <h1>Add New Product</h1>
          <ProductForm add={this.addItem} />
        </div>
      </div>
    );
  }
}

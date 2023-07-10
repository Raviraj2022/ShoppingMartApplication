import React, { Component } from "react";
import ProductList from "./ProductList";
export default class App extends Component {
  render() {
    return (
      <div>
        <ProductList
          items={[
            { name: "JBL Earphones", qty: 2 },
            { name: "Polestar BackPack", qty: 2 },
            { name: "One Plus Nord2", qty: 4 },
            { name: "Apple I-Phone 13", qty: 5 },
            { name: "Cannon DSLR", qty: 6 },
            { name: "Watch", qty: 7 },
          ]}
        />
      </div>
    );
  }
}

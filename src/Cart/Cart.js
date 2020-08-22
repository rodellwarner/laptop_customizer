import React, { Component } from "react";
import Total from "../Total/Total";
import CartItem from "../CartItem/CartItem";

class Cart extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, index) => {
      const featureHash = feature + "-" + index;
      const selectedOption = this.props.selected[feature];

      return (
        <CartItem
          key={featureHash}
          featureHash={featureHash}
          selectedOption={selectedOption}
          feature={feature}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total selected={this.props.selected} />
      </section>
    );
  }
}

export default Cart;

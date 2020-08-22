import React, { Component } from "react";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureItem extends Component {
  render() {
    return (
      <label htmlFor={this.props.itemHash} className="feature__label">
        {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
      </label>
    );
  }
}

export default FeatureItem;

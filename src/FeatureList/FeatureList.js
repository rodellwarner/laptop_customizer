import React, { Component } from "react";
import Feature from "../Feature/Feature";
import FEATURES from "../FEATURES";

class FeatureList extends Component {
  render() {
    const features = Object.keys(FEATURES).map((feature, index) => {
      const featureKey = "FK_" + feature;
      return (
        <Feature
          key={featureKey}
          feature={feature}
          index={index}
          selected={this.props.selected}
          handleUpdateFeature={this.props.handleUpdateFeature}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default FeatureList;

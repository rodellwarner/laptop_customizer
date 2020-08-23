import React, { Component } from "react";
import slugify from "slugify";
import FeatureItem from "../FeatureItem/FeatureItem";

class FeatureList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, index) => {
      const featureHash = feature + "-" + index;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem
            key={itemHash}
            item={item}
            itemHash={itemHash}
            feature={feature}
            selected={this.props.selected}
            handleUpdateFeature={this.props.handleUpdateFeature}
          />
        );
      });

      function FeatureLabel() {
        return <h3>{feature}</h3>;
      }

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <FeatureLabel />
          </legend>
          {options}
        </fieldset>
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

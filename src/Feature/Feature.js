import React, { Component } from "react";
import slugify from "slugify";
import FeatureItem from "../FeatureItem/FeatureItem";
import FEATURES from "../FEATURES";

class Feature extends Component {
  render() {
    const labelForFeature = this.props.feature;
    const featureHash = this.props.feature + "-" + this.props.index;
    const options = FEATURES[this.props.feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <FeatureItem
          key={itemHash}
          item={item}
          itemHash={itemHash}
          feature={this.props.feature}
          selected={this.props.selected}
          handleUpdateFeature={this.props.handleUpdateFeature}
        />
      );
    });

    function FeatureLabel() {
      return <h3>{labelForFeature}</h3>;
    }

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <FeatureLabel />
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Feature;

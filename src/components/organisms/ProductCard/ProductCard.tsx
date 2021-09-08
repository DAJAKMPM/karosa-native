/**
 *
 * ProductCard
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";
import VariationThree from "./VariationThree";

const ProductCard: FC<PropsType> = (props) => {
  const {
    name,
    variation,
    buttonTitle,
    onButtonClick,
    previousPrice,
    image,
    rating,
    location,
    sold,
    currentPrice,
    wholesale,
    discount,
    onHeartClick,
    heartFlag,
  } = props;

  switch (variation) {
    case 1:
      return (
        <VariationOne
          name={name}
          wholesale={wholesale}
          image={image}
          buttonTitle={buttonTitle}
          onButtonClick={onButtonClick}
          sold={sold}
          currentPrice={currentPrice}
          discount={discount}
          variation={variation}
        />
      );
    case 2:
      return (
        <VariationTwo
          name={name}
          image={image}
          rating={rating}
          location={location}
          sold={sold}
          currentPrice={currentPrice}
          previousPrice={previousPrice}
          discount={discount}
          variation={variation}
        />
      );
    case 3:
      return (
        <VariationThree
          name={name}
          image={image}
          rating={rating}
          location={location}
          sold={sold}
          currentPrice={currentPrice}
          previousPrice={previousPrice}
          discount={discount}
          variation={variation}
          onHeartClick={onHeartClick}
          heartFlag={heartFlag}
        />
      );
    default:
      return (
        <VariationOne
          name={name}
          image={image}
          buttonTitle={buttonTitle}
          onButtonClick={onButtonClick}
          sold={sold}
          currentPrice={currentPrice}
          discount={discount}
          variation={variation}
        />
      );
  }
};

export default ProductCard;

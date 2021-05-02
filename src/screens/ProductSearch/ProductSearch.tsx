/**
 *
 * ProductSearch
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ProductSearchTemplate from "@app/templates/ProductSearch";

const ProductSearch: FC = () => {
  const { goBack } = useNavigation();

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return <ProductSearchTemplate onBack={handleBack} />;
};

export default ProductSearch;

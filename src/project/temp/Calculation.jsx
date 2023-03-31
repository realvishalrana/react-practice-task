import React, { useMemo } from "react";

const Calculation = ({ result }) => {
  const ans = useMemo(() => {
    return (
      result.price -
      (result.price * result.discountPer) / 100 +
      result.deliveryCharge
    );
  }, [result]);
  return <>{ans}</>;
};

export default Calculation;

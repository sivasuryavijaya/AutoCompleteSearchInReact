import React from "react";

export const TableImage = ({ data }) => {
  return (
    <img
      style={{ width: 80, height: 80, align: "center", marginTop: 10 }}
      src={data.imageurl}
      alt="table-image"
    />
  );
};

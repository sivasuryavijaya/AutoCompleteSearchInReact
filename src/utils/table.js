export const formatTableData = (data) => {
  const formatTableData = data.reduce((acc, row) => {
    let fields = row["fields"] || {};
    Object?.keys(fields).map((field) => (fields[field] = fields[field].value));

    return [...acc, { ...fields }];
  }, []);

  return formatTableData;
};

export const tableHeaderNames = {
  category: "Category",
  imageurl: "Image",
  listprice: "Price",
  name: "Name",
  id: "id",
};

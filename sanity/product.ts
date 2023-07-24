export const products = {
    name: "products",
    type: "document",
    title: "Products",
    fields: [
      {
        name: "title",
        title: "Product Title",
        type: "string"
      },
      {
        name: "tag",
        title: "Product tag",
        type: "string",
        options: {
          list: [
            { title: "Dress", value: "Dress" },
            { title: "Pants", value: "Pants" },
            { title: "Sweater", value: "Sweater" },
            { title: "Jackets", value: "Jackets" },
            
          ],
          layout: "radio"
          
        }
      },
      {
        name: "price",
        title: "Price",
        type: "string"
      },
      {
        name: "image",
        title: "Product Image",
        type: "image"
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Male", value: "male" },
            { title: "Female", value: "female" },
            { title: "Kids", value: "kids" },
          ],
          layout: "radio"
        }
      },{ name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },}
    ]
  };
  
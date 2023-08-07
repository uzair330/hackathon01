import { defineType, defineField } from "sanity";
export const products = defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "Product tag",
      type: "string",
      options: {
        list: [
          { title: "Dress", value: "Dress" },
          { title: "T Shirts", value: "T-Shirt" },
          { title: "Pants", value: "Pants" },
          { title: "Sweater", value: "Sweater" },
          { title: "Jackets", value: "Jackets" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Kids", value: "kids" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});

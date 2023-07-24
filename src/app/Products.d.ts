import { Image } from "sanity";

export interface SanityProducts  {
    _id: string;
    title: string,
    tag: string,
    price: number,
    image: Image,
    category: string,
    slug: {
        current: string;
    }

}
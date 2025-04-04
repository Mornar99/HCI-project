export type Shoe = {
  brand: string;
  color: string;
  description: string;
  id: number;
  material: string;
  name: string;
  price: number;
  size: number;
};

export type ContentfulImage = {
  url: string;
};

export type NewsPost = {
  sys: { id: string };
  title: string;
  publishedDate: string;
  content: string;
  image: ContentfulImage;
};

export type NewsPostCollectionResponse = {
  data: {
    newsPostCollection: {
      items: NewsPost[];
    };
  };
};

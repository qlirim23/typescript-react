export type PostT = {
  id: string;
  title: string;
  updateAt: string;
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  Comment?: {
    createAt?: string;
    id: string;
    postId: string;
    title: string;
    userId: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};

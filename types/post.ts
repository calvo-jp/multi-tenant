import IUser from "./user";

type Body = {
  html: string;
  markdown: string;
};

export default interface IPost {
  id: string;
  slug: string;
  title: string;
  cover: string;
  body: Body;
  author: IUser;
}

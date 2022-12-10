import IUser from "./user";

export default interface IPost {
  id: string;
  slug: string;
  title: string;
  cover: string;
  body: string;
  author: IUser;
}

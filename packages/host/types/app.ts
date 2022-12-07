export default interface IApp {
  id: string;
  slug: string;
  name: string;
  description: string;
  cover: {
    url: string;
    width: number;
    height: number;
  };
}

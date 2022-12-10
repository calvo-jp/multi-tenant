import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import IPost from "types/post";
import mockUser from "./mock-user";
import slugify from "./slugify";

export default function mockPost(overrides: Partial<IPost> = {}): IPost {
  const fullpath = path.join(process.cwd(), "assets/POST.md");
  const markdown = fs.readFileSync(fullpath, { encoding: "utf-8" });

  const id = faker.datatype.uuid();
  const title = faker.lorem.sentence(
    faker.datatype.number({
      min: 5,
      max: 10,
    }),
  );
  const slug = slugify(title);
  const author = mockUser();
  const cover = faker.helpers.arrayElement(images);
  const body = {
    markdown,
    html: remark().use(html, { sanitize: false }).processSync(markdown).toString(),
  };

  return {
    id,
    slug,
    title,
    body,
    author,
    cover,
    ...overrides,
  };
}

const images = [
  "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/66258/staniel-cay-swimming-pig-seagull-fish-66258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

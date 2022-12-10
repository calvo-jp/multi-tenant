import { faker } from "@faker-js/faker";
import IUser from "types/user";

export default function mockUser(overrides: Partial<IUser> = {}): IUser {
  const id = faker.datatype.uuid();
  const name = faker.name.fullName();
  const email = faker.internet.email();
  const username = faker.internet.userName();
  const avatar = `https://i.pravatar.cc/400?u=${id}`;

  return {
    id,
    name,
    email,
    username,
    avatar,
    ...overrides,
  };
}

import { faker } from "@faker-js/faker";
import IUser from "types/user";

export default function mockUser(overrides: Partial<IUser> = {}): IUser {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    ...overrides,
  };
}

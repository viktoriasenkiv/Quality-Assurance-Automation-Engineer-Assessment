import { faker } from '@faker-js/faker';

export function createUserData() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        gender: faker.helpers.arrayElement(["male", "female"]),
        status: "active"
    };
}
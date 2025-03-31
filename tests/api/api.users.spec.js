import { test, expect } from "@playwright/test";
import { UserAPI } from "../../api/user.api";
import { createUserData } from "../../api/fixtures";

test.describe("GoRest API Tests", () => {
  let newUserId;
  let userData;

  test.beforeAll(async () => {
    userData = createUserData();
  });

  test("Create a new user", async ({ request }) => {
    const response = await UserAPI.createUser(request, userData);

    expect(response.status()).toBe(201);
    const responseBody = await response.json();

    expect(responseBody).toHaveProperty("id");
    expect(typeof responseBody.id).toBe("number");
    expect(responseBody).toHaveProperty("name", userData.name);
    expect(responseBody).toHaveProperty("email", userData.email);
    expect(responseBody).toHaveProperty("gender", userData.gender);
    expect(responseBody).toHaveProperty("status", userData.status);

    newUserId = responseBody.id;
  });

  test("Get user", async ({ request }) => {
    const response = await UserAPI.getUser(request, newUserId);

    const responseBody = await response.json();
    
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty("id", newUserId);
    expect(responseBody).toHaveProperty("name", userData.name);
    expect(responseBody).toHaveProperty("email", userData.email);
    expect(responseBody).toHaveProperty("gender", userData.gender);
    expect(responseBody).toHaveProperty("status", userData.status);
  });

  test("Delete user", async ({ request }) => {
    const deleteUserResponse = await UserAPI.deleteUser(request, newUserId);
    expect(deleteUserResponse.status()).toBe(204);

    const getUserResponse = await UserAPI.getUser(request, newUserId);
    expect(getUserResponse.status()).toBe(404);    
  });
});
import Auth from "./Auth";

describe("Auth", () => {
  test("returns a user with successful login", async () => {
    const { user } = await Auth.login({
      email: "test@bambee.com",
      password: "password"
    });
    expect(user.name).toBe("Molly Testsalot");
  });
  test("returns an error message with unsuccessful login", () => {
    const request = Auth.login({
      email: "bad@bambee.com",
      password: "foo"
    });
    expect(request).rejects.toEqual({
      message: "That does not match any user in our records."
    });
  });
});

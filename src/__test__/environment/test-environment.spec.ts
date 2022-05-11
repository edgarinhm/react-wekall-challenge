describe("Enviroment", () => {
  it("should test environment", () => {
    expect(process.env.PORT).toBe("9081");
  });
});

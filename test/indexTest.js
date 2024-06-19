require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Joe");
    });
  });

  describe("Height", () => {
    it("is less than 80 and greater than 0", () => {
      expect(height).toBeGreaterThan(0)
      expect(height).toBeLessThan(80);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});

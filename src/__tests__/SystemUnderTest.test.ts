import { oddOrEven } from "../SystemUnderTest";

describe("Testing", () => {
  it("testing odd number", async () => {
    debugger;
    const output = await oddOrEven(3);
    expect(output).toEqual("odd");
  });

  it("testing even number", async () => {
    debugger;
    const output = await oddOrEven(2);
    expect(output).toEqual("even");
  });
});

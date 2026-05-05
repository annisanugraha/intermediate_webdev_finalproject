const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script.js');

describe("Interest Rate Calculator Tests", () => {
  it("should calculate simple interest correctly", () => {
    const result = calculateSimpleInterest(1000, 5, 1);
    expect(result).toBe(50);
  });

  it("should calculate total payable amount correctly", () => {
    const result = calculateTotalPayableAmount(1000, 50);
    expect(result).toBe(1050);
  });

  it("should handle zero interest rate", () => {
    const result = calculateSimpleInterest(1000, 0, 5);
    expect(result).toBe(0);
  });

  it("should handle zero time period", () => {
    const result = calculateSimpleInterest(1000, 5, 0);
    expect(result).toBe(0);
  });

  it("should handle floating point numbers", () => {
    const result = calculateSimpleInterest(1200.50, 4.5, 2.5);
    // (1200.5 * 4.5 * 2.5) / 100 = 135.05625
    expect(result).toBeCloseTo(135.05625, 5);
  });
});

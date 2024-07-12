import { formateCurrency } from "../script/Utiity/money.js";

describe("test suite: formateCurrency", () => {
    it("converting cents to dollars", () => {
        expect(formateCurrency(2095)).toEqual("20.95")
    })
    it("converting 0 to dollars",() =>{
        expect(formateCurrency(0)).toEqual("0.00")
    })
    it("rounding priceCents to dollars using math.round",() => {
        expect(formateCurrency(2000.5)).toEqual("20.01")
    })
})
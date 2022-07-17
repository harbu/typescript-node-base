import { helloWorld } from "../src/app"

describe(helloWorld, () => {
    it("gives expected string", () => {
        expect(helloWorld()).toEqual("hello, world!")
    })

    it("jest-extended works", () => {
        expect(313).toBeOdd()
    })
})

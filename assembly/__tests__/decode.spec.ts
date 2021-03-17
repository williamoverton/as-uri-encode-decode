import { decodeURIComponent } from "../index"
  
describe("URI Decoding", () => {
  it("Non encoded string should remain the same", () => {
    const input = "Hello"
    expect<string>(input).toBe(decodeURIComponent(input))
  })

  it("Spaces with plus signs should be decoded", () => {
    const input = "Hello+There"
    const result = "Hello There"
    expect<string>(result).toBe(decodeURIComponent(input))
  })

  it("Encoded string should return unencoded string", () => {
    const input = "%5BThis%5D+IS+a+5t%A3ss+T3sT%2B0F%2Fusing%3Flots-of%2Bchars+to+%22hopefu%7C%7Cy%22+%2F+get+%3Cthe%3E+%7Ecorrect+%24RESULT%24"
    const result = "[This] IS a 5t£ss T3sT+0F/using?lots-of+chars to \"hopefu||y\" / get <the> ~correct $RESULT$"
    expect<string>(result).toBe(decodeURIComponent(input))
  })
})

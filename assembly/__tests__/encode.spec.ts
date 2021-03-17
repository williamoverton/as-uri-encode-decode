import { encodeURIComponent } from "../index"
  
describe("URI Decoding", () => {
  it("Non encoded string should remain the same", () => {
    const input = "Hello"
    expect<string>(input).toBe(encodeURIComponent(input))
  })

  it("Spaces with plus signs should be encoded", () => {
    const result = "Hello%20There"
    const input = "Hello There"
    expect<string>(result).toBe(encodeURIComponent(input))
  })

  it("Encoded string should return unencoded string", () => {
    const result = "%5BThis%5D%20IS%20a%205t%A3ss%20T3sT%2B0F%2Fusing%3Flots-of%2Bchars%20to%20%22hopefu%7C%7Cy%22%20%2F%20get%20%3Cthe%3E%20correct%20%24RESULT%24"
    const input = "[This] IS a 5t£ss T3sT+0F/using?lots-of+chars to \"hopefu||y\" / get <the> correct $RESULT$"
    expect<string>(result).toBe(encodeURIComponent(input))
  })
})
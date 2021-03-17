# as-uri-encode-decode

Since decodeURIComponent and encodeURIComponent are not available yet: https://github.com/AssemblyScript/assemblyscript/wiki/Status-and-Roadmap#globals
This module provides those functions written in AssemblyScript. 

This implementation works for ISO-8859-1 but doesnt always deal with multi byte utf-8 decoding well, e.g. `£` which is `%C2%A3` in utf8, this would become `A£` in ISO-8859-1.

```
import {decodeURIComponent, encodeURIComponent} from "./urlencoder"


const input = "Hello! This is a test!?!?"

const output = encodeURIComponent(input)

// output = Hello%21%20This%20is%20a%20test%21%3F%21%3F

const result = decodeURIComponent(output)

// result = Hello! This is a test!?!?
```
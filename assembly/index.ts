
export function decodeURIComponent(input: string): string {
    let result: string = ""

    for(let i = 0 ; i < input.length; i++){
        if(input.charAt(i) == "+"){
            result += " "
            continue
        }

        if(input.charAt(i) == "%"){

            result += String.fromCharCode(<i32>parseInt(input.charAt(i + 1) + input.charAt(i + 2), 16))

            i += 2
            continue
        }

        result += input.charAt(i)
    }

    return result
}

export function encodeURIComponent(input: string): string {
    let result: string = ""

    for(let i = 0 ; i < input.length; i++){
        const c = input.charAt(i);
        if(isSafe(c)){
            result += c
        }else{
            result += "%" + c.charCodeAt(0).toString(16)
        }
    }

    return result
}

// Src: http://developer.classpath.org/doc/java/net/URLEncoder-source.html
function isSafe(c: string): bool {
    return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
        || (c >= '0' && c <= '9') || c == '-' || c == '_' || c == '.'
        || c == '*');
}

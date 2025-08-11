export function parse(text: string, data: any, startParam = "{", endParam = "}") {

    const startIndex = text.indexOf(startParam);
    const endIndex = text.indexOf(endParam);

    if (startIndex === -1 || endIndex === -1) {
        return text;
    }

    const start = startIndex + startParam.length;
    const end = endIndex;

    const keyString = text.substring(start, end);
    const key = keyString.split(".");
    let value;

    if (key.length === 1) {
        value = data[key[0]];
    } else {
        value = data[key[0]][key[1]];
    }

    if (typeof value === "undefined") {
        return text;
    }

    text = text.replace(startParam + keyString + endParam, value);

    if (text.indexOf(startParam) !== -1) {
        return parse(text, data, startParam, endParam);
    }

    return text;
}

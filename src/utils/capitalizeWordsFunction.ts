export const capitalizeWords = (str: string | undefined) => {
    return str && str.replace(/\b\w/g, char => char.toUpperCase())
}
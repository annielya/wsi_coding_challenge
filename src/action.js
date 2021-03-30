export const select = (id) => {
    return {
        type: "SELECT",
        id: id
    }
}

export const search = (val) => {
    return {
        type: "SEARCH",
        value: val
    }
}
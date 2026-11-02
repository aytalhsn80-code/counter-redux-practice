export const add = "add"
export const dec = 'dec'
export const add2 = "add2"
export const addNum = 'addNum'

export const addAction = () => {
    return {
        type : add
    }
}

export const decAction = () => {
    return {
        type : dec
    }
}
export const  add2Action = () => {

    return {
        type : add2
    }
}
export const addNumber = (value) => {
    return {
        type : addNum ,
        value : value
    }
}
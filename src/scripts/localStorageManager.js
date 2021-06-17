const getUserId = () => {
    return localStorage.getItem("userid")
}

const setUserId = id => {
    return localStorage.setItem("userid",id)
}

export { getUserId , setUserId }
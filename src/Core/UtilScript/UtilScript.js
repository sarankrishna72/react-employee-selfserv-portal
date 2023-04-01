export const getCookieData = (cookieItems) => {
    // const name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    var cookieObj = {}
    for (const item of cookieItems) {
        let c = ca.filter((x) => x.includes(`_${item}=`))[0]
        if (c) {
            while(c.charAt(0) === " ") {
                c = c.substring(1)
            }
            cookieObj[item] = c.substring(`_${item}=`.length, c.length);
        } else return {}
       
    }
    return cookieObj;
}


export const setLocalStorage = (name, data) => {
    localStorage.setItem(name, btoa(unescape(encodeURIComponent(JSON.stringify(data)))));
    return true;
}

export const getLocalStorage = (name) => {
    if (localStorage.getItem(name))  return (JSON.parse(atob(localStorage.getItem(name))))
    return false;
   
}

export const removeLocalStorage = (name) => {
    localStorage.removeItem(name);
    return true;
}
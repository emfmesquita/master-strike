export const saveStr = (key, str) => {
    localStorage.setItem(key, str);
}

export const getStr = key => {
    return localStorage.getItem(key);
}

export const saveObj = (key, obj) => {
    saveStr(key, JSON.stringify(obj));
}

export const getObj = key => {
    const value = getStr(key);
    return value ? JSON.parse(value) : null;
}
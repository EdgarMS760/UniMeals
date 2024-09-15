export const urlBase = "http://localhost:5173/api";

//Funcion para realizar Post Request
export const postHTTP = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });

    const data = await response.json()

    if (!response.ok) {
        return { error: true, data }
    }

    return data;
}
//Funcion para realizar Get Request
export const getRequest = async (url) => {
    const response = await fetch(url)

    const data = await response.json()

    if (!response.ok) {
        return { error: true, data }
    }

    return data;
}
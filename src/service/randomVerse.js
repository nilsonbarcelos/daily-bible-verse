import api from "./api"

export async function randomVerse(){
    try {
        const result = await api.get(`/?random=verse`)
        return result.data
    } catch (error) {
        console.log(error)
        return 'error'
    }
}
import { randomVerse } from "../service/randomVerse"

export default {
    async verse(req, res) {
        const result = await randomVerse()
        return res.json(result)
    }
}
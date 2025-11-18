import {validateToken} from "../utils/token-utils.js"

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token && validateToken(token)) {
        req.user = {name:'Sumit', id:1}
    } else {
        res.status(401).send("Unauthorized: invalid or missing token")
    }
}

export default authMiddleware;
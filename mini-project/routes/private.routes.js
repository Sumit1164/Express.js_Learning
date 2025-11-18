import express from 'express'

const router = express.Router();

//! dashboard   <- (accesstoken)✅

router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).send({
        message:"Wellcome to dashboard🏠"
    })
})

export default router;
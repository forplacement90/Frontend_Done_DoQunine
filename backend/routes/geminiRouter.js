const { Router } = require("express");
const run = require("../geminiApi");

const router = Router();

router.post("/prompt-post", async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await run(prompt);
        res.json({ response });
    } catch (error) {
        console.error("Error in /prompt-post:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
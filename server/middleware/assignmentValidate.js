function assignmentValidation(req, res, next) {
    const body = req.body;

    if (!body.title || !body.content || !body.category || !body.email) {
        return res.status(400).json({
            message: "อย่าซีเลง"
        });
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(body.email)) {
        return res.status(400).json({
            message: "เดี๋ยวซู่หลิ่ง ",
            field:"email"
        });
    }

    const categoryChecker = ["Math", "English", "Biology"];
    if (!categoryChecker.includes(body.category)) {
        return res.status(400).json({
            message: "ซายหยอดสูดเด๋ ",
            field:"category"
        });
    }

    if (typeof body.content !== 'string' || body.content.length < 500 || body.content.length > 1000) {
        return res.status(400).json({
            message: "ไปแก้มาใหม่ ",
            field:"content"
        });
    }

    next();
}

export default assignmentValidation;

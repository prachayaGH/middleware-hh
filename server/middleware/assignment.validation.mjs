export const validateAssignment = (req,res,next) => {
    const { title, content, category, email} = req.body
    if (!title || !content || !category || !email) {
        return res.status(400).json({
            message: "กรุณาใส่ข้อมูลให้ครบถ้วน"
        })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "รูปแบบอีเมลไม่ถูกต้อง"
        })
    }

    const categories = ["Math", "English", "Biology"]
    if (!categories.includes(category)) {
        return res.status(400).json({
            message: "ไม่มี category นี้"
        })
    }

    if (content.length < 500 || content.length > 1000) {
        return res.status(400).json({
            message: "ความยามตัวอักษรไม่ตรงกับที่กำหนด"
        })
    }

    next()
}


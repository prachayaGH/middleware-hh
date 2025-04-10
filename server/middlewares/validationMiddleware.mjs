export const validateAssignment = (req, res, next) => {
    const { title, content, category, email } = req.body;
  
    if (!title || !content || !category || !email) {
      return res.status(400).json({ message: "All fields are required: title, content, category, and email." });
    }
  
    const validCategories = ["Math", "English", "Biology"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: "Category must be one of the following: Math, English, Biology." });
    }
  
    if (typeof content !== 'string' || content.length < 500 || content.length > 1000) {
      return res.status(400).json({ message: "Content must be a string between 500 and 1000 characters long." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email must be a valid email address." });
    }
  
    next();
  };
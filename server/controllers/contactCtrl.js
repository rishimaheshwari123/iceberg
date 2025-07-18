const { contactUsEmail } = require("../template/contactFormRes");
const mailSender = require("../utils/mailSenderr");

const contactCtrl = async (req, res) => {
    const { name, email, phone, message = '' } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
        return res.status(400).send({
            message: "Please provide all required fields (name, email, phone).",
            success: false
        });
    }

    try {
        // Modify the email template to include optional message
        const emailContent = contactUsEmail(name, email, phone, message);

        const emailRes = await mailSender(
            "rishimaheshwari040@gmail.com",
            "Your Data sent successfully",
            emailContent
        );

        res.status(200).send({
            message: "Email sent successfully. Our team will contact you soon!",
            success: true,
            emailRes
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({
            message: "Error in sending email",
            success: false
        });
    }
};


module.exports = { contactCtrl }
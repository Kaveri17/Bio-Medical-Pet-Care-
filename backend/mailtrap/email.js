import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { transporter, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) =>{
    try {
        const response = await transporter.sendMail({
            from:sender,
            to:email,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })
        console.log("Email sent successfully",response)
    } catch (error) {
        console.error('Error sending verification',error)
        throw new Error(`Error sending verification email: ${error}`)        
    }
}

export const sendWelcomeEmail = async( email,name)=>{
    try {
        const response = await transporter.sendMail({
            from:sender,
            to:email,
            template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
        })
        console.log("Welcome email sent successfully", response)
    } catch (error) {
        console.error("Error sending welcome email",error)
        throw new Error(`Error sending welcome email:${error}`)
    }
}

export const sendPasswordResetEmail = async (email, resetURL) =>{
    // const recipient = [{email}]

    try {
        const response = await transporter.sendMail({
            from: sender,
            to:email,
            subject:"Reset Your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Password Reset",
        })
        console.log("Reset password email sent successfully", response)
    } catch (error) {
        console.error("Error sending password reset email",error)
        throw new Error(`Error sending password reset email: ${error}`)
    }
}

export const sendResetSuccessEmail = async(email)=>{
    try {
        const response = await transporter.sendMail({
            from: sender,
            to:email,
            subject:"Password Reset Successfull",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset",
        })
        console.log("Password Reset email sent successfully", response)
    } catch (error) {
        console.error("Error sending password reset success email",error)
        throw new Error(`Error sending password reset success email: ${error}`)
    }
    
}
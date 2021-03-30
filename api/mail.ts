import sgMail from '@sendgrid/mail'

export const mail = (to: string, subject: string, text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: 'beetcb@outlook.com',
    to,
    subject,
    text,
  }
  return sgMail.send(msg)
}

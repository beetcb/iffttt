import { mail } from './mail'
import { VercelRequest, VercelResponse } from '@vercel/node'

type Content = Record<'occurred' | 'text' | 'from', string>

export default (request: VercelRequest, response: VercelResponse) => {
  const {
    body,
    query: { filter },
  } = request

  // Get filter and filter content
  const regex = new RegExp(typeof filter === 'string' ? filter : '.*', 'i')
  const content: Content | null = body ? JSON.parse(body) : null

  if (content) {
    // Get filterd content
    const filtered = regex.exec(content.text)
    const filteredText = filtered ? filtered[0] : null

    // Send mail
    if (filteredText) {
      // Format mail
      const text = `SMS Content: ${filteredText}\nFrom: ${content.from}\nTrigger: ${content.occurred}`
      mail('i@beetcb.com', 'iffttt -> SMS', text).then((_) =>
        console.log('success')
      )
    }
  }
}

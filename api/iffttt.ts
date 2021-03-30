import { mail } from './mail'
import { VercelRequest, VercelResponse } from '@vercel/node'

type Content = Record<'occurred' | 'text' | 'from', string>

export default async (request: VercelRequest, response: VercelResponse) => {
  const {
    body,
    query: { filter },
  } = request

  // Get filter and filter content
  const regex = new RegExp(
    typeof filter === 'string' ? decodeURIComponent(filter) : '.*',
    'i'
  )

  const content: Content | null = body ? body : null
  console.log(content)

  if (content) {
    // Get filterd content
    const filtered = regex.exec(content.text)
    const filteredText = filtered ? filtered[0] : null
    console.log(filteredText)

    // Send mail
    if (filteredText) {
      // Format mail
      const text = `SMS Content: ${filteredText}\nFrom: ${content.from}\nTrigger: ${content.occurred}`
      const res = await mail('i@beetcb.com', 'SMS -> IFFTTT', text)
      console.log(res)
    }
  }

  response.send('RegExp: ' + regex)
}

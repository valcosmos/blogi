import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

const handler = NewsletterAPI({
  provider: siteMetadata.newsletter!.provider,
})

export { handler as GET, handler as POST }

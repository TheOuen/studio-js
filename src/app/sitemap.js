export default function sitemap() {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000'
  const now = new Date()
  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/work`, lastModified: now },
    { url: `${baseUrl}/blog`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
  ]
}




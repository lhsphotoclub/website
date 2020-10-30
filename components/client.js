const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken
})

export async function fetchEntries(type, slug) {
    const exportQuery = {'content_type': type}
    console.log(slug)
    if (slug !== undefined) {
        exportQuery['fields.slug'] = slug
    }
    console.log(exportQuery)
    const entries = await client.getEntries(exportQuery)
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}
 
export async function fetchEntry(id) {
    const entry = await client.getEntry(id)
    if (entry) return entry
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries, fetchEntry }
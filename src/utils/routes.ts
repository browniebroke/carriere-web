import slugify from 'slugify'

export function makeAlbumUrlPath(title: string): string {
  const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g })
  return `/produits/${slug}/`
}

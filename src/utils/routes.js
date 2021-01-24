const slugify = require('slugify')

exports.makeAlbumUrlPath = (title) => {
  const slug = slugify(title, { lower: true, remove: /[*+~.()'"!:@]/g })
  return `/produits/${slug}/`
}

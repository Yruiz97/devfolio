import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "yg0lwo5n", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2022-03-07",
})

import axios from 'axios'

export const getAtomicAssets = query => {
  const collectionName = "dropbearsnft"
  const schemaName = "dropbears"
  const match = query
  const order = "asc"
  return axios.get(`https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=${collectionName}&schema_name=${schemaName}&match=${match}&order=${order}`)
}

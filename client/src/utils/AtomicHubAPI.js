import axios from 'axios'

// const getAtomicAssets = query => {
//   const collectionName = "dropbearsnft"
//   const schemaName = "dropbears"
//   const immutableName = `%23${query}`
//   return axios.get(`https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=${collectionName}&schema_name=${schemaName}&immutable_name=${immutableName}&limit=1&order=desc&sort=created`)
// }

// export default getAtomicAssets

export default {
  getAtomicAssets: function(query) {
    const collectionName = "dropbearsnft"
    const schemaName = "dropbears"
    const match = query
    return axios.get(`https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=${collectionName}&schema_name=${schemaName}&match=${match}`)
  }
}

// Ensure query is url friendly 
// E.g. "dropbear #6666" = "dropbear %236666" where "#" is replaced with "%23"

// query = "dropbear %236666"
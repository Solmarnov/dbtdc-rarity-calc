import axios from 'axios'

export default {
  getAtomicAssets: function(query) {
    const collectionName = "dropbearsnft"
    const schemaName = "dropbears"
    const immutableName = query
    return axios.get(`https://wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=${collectionName}&schema_name=${schemaName}&immutable_name=${immutableName}&limit=1&order=desc&sort=created`)
  }
}

// Ensure query is url friendly 
// E.g. "dropbear #6666" = "dropbear %236666" where "#" is replaced with "%23"

// query = "dropbear %236666"
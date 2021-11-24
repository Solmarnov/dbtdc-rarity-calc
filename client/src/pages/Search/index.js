import React, { useState } from 'react'
import AtomicHubAPI from '../../utils/AtomicHubAPI'
import Header from '../../components/Header'
import { Container } from '../../components/Grid'




const Search = () => {
  const [dropbear, setDropbear] = useState([])
  const [formObject, setFormObject] = useState ({})

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormObject({ ...formObject, [name]: value })
  }
  
  const handleFormSubmit = event => {
    event.preventDefault();
    event.target.setAttribute('disabled', true)
    const { searchQuery } = formObject
    if (formObject.searchQuery) {
      AtomicHubAPI.getAtomicAssets(searchQuery)
      .then(({ data }) => {
        console.log(data)
        setDropbear(data)
        setFormObject({})
      })
      .catch(err => console.log(`Error occurred getting Atomic Assets.\n${err}`))
    }
  }

  return (
    <Header />
  )

}

export default Search;
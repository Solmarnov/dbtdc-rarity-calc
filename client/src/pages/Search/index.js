import React, { useState, useEffect } from 'react'
import './style.css'
import AtomicHubAPI from '../../utils/AtomicHubAPI'
import Header from '../../components/Header'
import { Container } from '../../components/Grid'
import PageWrapper from '../../components/PageWrapper'
import Form from '../../components/Form'
import { FormGroup, FormBtn } from '../../components/FormGroup'
import { Input } from '../../components/FormGroupChildren'
import Card from '../../components/Card'

const Search = () => {
  const [formObject, setFormObject] = useState ({})
  const [searchResult, setSearchResult] = useState({})


  // Delete useEffect after debugging
  useEffect(() => {
  })

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
        const { data: searchResultsArray } = data
        const dropbearName = `Dropbear #${formObject.searchQuery}`
        // Find and store matching Dropbear object
        const result = searchResultsArray.find(object => object.data.name === dropbearName)
        setSearchResult(result)
        setFormObject({})
      })
      .catch(err => console.log(`Error occurred getting Atomic Assets.\n${err}`))
    }
  }

  const isObjectEmpty = object => {
    for (let x in object) { return false }
    return true
  }

  return (
    <PageWrapper>
      <Header />
      <Container id="dropbear-search-container">
        <h1>Dropbear Rarity</h1>
        <Form id="dropbear-search-form">
          <FormGroup>
            <Input 
              type="text" 
              name="searchQuery" 
              id="dropbear-search-input" 
              placeholder="Search Dropbear (e.g. 3701)" 
              onChange={handleInputChange} 
            />
          </FormGroup>
          <FormBtn
            type="submit"
            id="dropbear-search-button"
            disabled={!(formObject.searchQuery)}
            onClick={handleFormSubmit}
          >
            Search
          </FormBtn>
        </Form>
      </Container>
      <Container id="dropbear-result-container">
        {isObjectEmpty(searchResult) ? (
          <h2>Search Dropbear</h2>
        ) : (
          <Card searchResult={searchResult}>
          </Card>
        )}
        {/* <Card /> */}
      </Container>
    </PageWrapper>
  )
}

export default Search
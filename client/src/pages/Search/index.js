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
  const ipfsBaseUrl = 'https://ipfs.atomichub.io/ipfs/'
  const [formObject, setFormObject] = useState ({})
  const [searchResult, setSearchResult] = useState({})


  // Delete useEffect after debugging
  useEffect(() => {
    console.log(`
    searchValue:\n${JSON.stringify(formObject, null, 4)}
    `)
    console.log(`
    searchResult:\n${JSON.stringify(searchResult, null, 4)}
    `)
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
        {searchResult ? (
          <h2>Search Dropbear</h2>
        ) : (
          <Card>
          </Card>
        )}
        <Card />
        {/* {console.log(`img = ${JSON.stringify(dropbear.length)}`)}
        {!dropbear.length ? (
          <h3>Syncunce error. Get your shit together.</h3>
        ) : (
          <div className="dropbear-result">
            <div className="dropbear-img">
              <img src={`${ipfsBaseUrl+dropbear.data[0].template.immutable_data.img}`} />
            </div>
          </div>
        )
        } */}
      </Container>
    </PageWrapper>
  )
}

export default Search



// Render Dropbear image
// https://ipfs.atomichub.io/ipfs/QmcQL6BSuEnmMnz2HZtcku7Az7a6vk9L1HdnFyUNUQskpi
// https://ipfs.atomichub.io/ipfs/${img}
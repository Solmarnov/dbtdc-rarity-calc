import React, { useState } from 'react'
import './style.css'
import { getAtomicAssets } from '../../utils/AtomicHubAPI'
import Header from '../../components/Header'
import { Container } from '../../components/Grid'
import PageWrapper from '../../components/PageWrapper'
import Form from '../../components/Form'
import { FormGroup, FormBtn } from '../../components/FormGroup'
import { Input } from '../../components/FormGroupChildren'
import Card from '../../components/Card'
const Scorecard = require('../../scorecard/scorecard.json')

const Search = () => {
  const [scorecard] = useState(Scorecard[0])
  const [formObject, setFormObject] = useState ({})
  const [searchResult, setSearchResult] = useState({})
  const [rarityScore, setRarityScore] = useState(0)
  class Dropbear {
    constructor(
      fur = "",
      eyes = "",
      eyewear = "",
      mouth = "",
      mouthObject = "",
      hat = "",
      piercings = "",
      attire = "",
      leftHandObject = "",
      watches = ""
    )
    {
      this.fur = fur
      this.eyes = eyes
      this.eyewear = eyewear
      this.mouth = mouth
      this.mouthObject = mouthObject 
      this.hat = hat
      this.piercings = piercings
      this.attire = attire
      this.leftHandObject = leftHandObject
      this.watches = watches
    }
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormObject({ ...formObject, [name]: value })
  }
  
  const handleFormSubmit = event => {
    event.preventDefault();
    event.target.setAttribute('disabled', true)
    const { searchQuery } = formObject
    if (formObject.searchQuery) {
      getAtomicAssets(searchQuery)
      .then(({ data }) => {
        const defaultValue = ""
        const { data: searchResultsArray } = data
        const dropbearName = `Dropbear #${formObject.searchQuery}`
        // Find and store matching Dropbear object
        const result = searchResultsArray.find(object => object.data.name === dropbearName)
        setSearchResult(result)
        const { data: { 
          Fur: fur = defaultValue,
          Eyes: eyes = defaultValue,
          Eyewear: eyewear = defaultValue,
          Mouth: mouth = defaultValue,
          'Mouth Object': mouthObject = defaultValue,
          Hat: hat = defaultValue,
          Piercings: piercings = defaultValue,
          Attire: attire = defaultValue,
          'Left Hand Object': leftHandObject = defaultValue,
          Watches: watches = defaultValue
        } } = result
        let dropbear = new Dropbear(
          fur,
          eyes,
          eyewear,
          mouth,
          mouthObject,
          hat,
          piercings,
          attire,
          leftHandObject,
          watches
        )
        const dbAttributesScores = getScores(dropbear)
        setRarityScore(sumScore(dbAttributesScores))
        setFormObject({})
      })
      .catch(err => console.log(`Error occurred during Handle Form Submit.\n${err}`))
    }
  }

  const getScores = (dropbearObject) => {
    const { attributes: scorecardAttributes } = scorecard
    const scoresArray = scorecardAttributes.map((attributeObject) => {
      let score = 0
      const { attribute, options } = attributeObject
      const prop = attribute
      const { [prop]: name } = dropbearObject
      // Loop through attribute options to find and return score
      for (let i = 0; i < options.length; i++) {
        // Set i to length of options if name is blank and is on 5th loop
        if (name === "" && i > 3) {
          i = options.length
        }
        // When name matches option, assign its score. 
        // Set i to length of options to exit loop.
        if (name === options[i].name) {
          score = options[i].score
          i = options.length
        }
      }
      return score
    })
    return scoresArray
  }

  const sumScore = array => {
    return array.reduce((a, b) => a + b, 0)
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
          <Card 
            searchResult={searchResult}
            rarityScore={rarityScore}
          />
        )}
      </Container>
    </PageWrapper>
  )
}

export default Search
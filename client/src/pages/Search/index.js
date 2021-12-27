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
  const [isDisabled, setIsDisabled] = useState(false)
  const [formErrors, setFormErrors] = useState({})

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
    setIsDisabled(false)
    setFormObject({ ...formObject, [name]: value })
  }
  
  const handleFormSubmit = event => {
    event.preventDefault();
    setIsDisabled(true)
    setFormErrors({})
    handleValidation()
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

  const handleValidation = () => {
    const { searchQuery } = formObject
    
    if (
      isNaN(searchQuery) ||
      searchQuery < 1 || 
      searchQuery > 6666 
    ) {
      setFormErrors({
        searchQuery: "Value must be a number between 1 and 6666."
      })
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
              type="number" 
              min="1"
              max="6666"
              name="searchQuery" 
              id="dropbear-search-input"
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormBtn
            type="submit"
            id="dropbear-search-button"
            disabled={isDisabled}
            onClick={handleFormSubmit}
          >
            Search
          </FormBtn>
        </Form>
        <div className="validation-error">
          {formErrors.searchQuery}
        </div>
      </Container>
      <Container id="dropbear-result-container">
        {isObjectEmpty(searchResult) ? (
          <div className="search-default">
            <h2>Search Dropbear</h2>
            <p>
              Enter a Dropbear's number between 1 and 6666.
            </p>
          </div>
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
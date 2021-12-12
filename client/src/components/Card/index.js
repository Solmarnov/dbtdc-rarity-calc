import React, {useEffect } from 'react'
import './style.css'

const Card = props => {
  const defaultValue = ""
  const ipfsBaseUrl = 'https://ipfs.atomichub.io/ipfs/'
  // Destructuring props
  const { 
    searchResult: { owner },
    searchResult: { data: 
      {
        Background: background = defaultValue,
        Fur: fur = defaultValue,
        Eyes: eyes = defaultValue,
        Eyewear: eyewear = defaultValue,
        Mouth: mouth = defaultValue,
        ['Mouth Object']: mouthObject = defaultValue,
        Hat: hat = defaultValue,
        Piercings: piercings = defaultValue,
        Attire: attire = defaultValue,
        ['Left Hand Object']: leftHandObject = defaultValue,
        Watches: watches = defaultValue,
        img
      },
      name
    }
  } = props

  console.log(`
Card props:
${JSON.stringify(props, null, 4)}
  `)

  return (
    <div className="card-outer">
      <div className="card-frame">
        <div className="card-inner">
          <div className="card-title">
            {name}
          </div>
          <img src={ipfsBaseUrl + img} className="card-image" />
          <div className="card-score">
            100
          </div>
          <div className="card-attributes-outer">
            <h2 className="card-attributes-title">Attributes</h2>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Background
              </div>
              <div className="card-attribute-value">
                {background}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Fur
              </div>
              <div className="card-attribute-value">
                {fur}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyes
              </div>
              <div className="card-attribute-value">
                {eyes}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyewear
              </div>
              <div className="card-attribute-value">
                {eyewear}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Mouth
              </div>
              <div className="card-attribute-value">
                {mouth}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Mouth Object
              </div>
              <div className="card-attribute-value">
                {mouthObject}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Hat
              </div>
              <div className="card-attribute-value">
                {hat}
              </div>
            </div>        
            <div className="card-attribute">
              <div className="card-attribute-name">
                Piercings
              </div>
              <div className="card-attribute-value">
                {piercings}
              </div>
            </div>            
            <div className="card-attribute">
              <div className="card-attribute-name">
                Attire
              </div>
              <div className="card-attribute-value">
                {attire}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Left Hand Object
              </div>
              <div className="card-attribute-value">
                {leftHandObject}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Watches
              </div>
              <div className="card-attribute-value">
                {watches}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
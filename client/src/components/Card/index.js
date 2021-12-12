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
        Background = defaultValue,
        Fur = defaultValue,
        Hat = defaultValue,
        Eyes = defaultValue,
        Eyewear = defaultValue,
        Mouth = defaultValue,
        Attire = defaultValue,
        ['Left Hand Object']: LeftHandObject = defaultValue,
        Watches = defaultValue,
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
                {Background}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Fur
              </div>
              <div className="card-attribute-value">
                {Fur}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Hat
              </div>
              <div className="card-attribute-value">
                {Hat}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyes
              </div>
              <div className="card-attribute-value">
                {Eyes}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyewear
              </div>
              <div className="card-attribute-value">
                {Eyewear}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Mouth
              </div>
              <div className="card-attribute-value">
                {Mouth}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Attire
              </div>
              <div className="card-attribute-value">
                {Attire}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Left Hand Object
              </div>
              <div className="card-attribute-value">
                {LeftHandObject}
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Watches
              </div>
              <div className="card-attribute-value">
                {Watches}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
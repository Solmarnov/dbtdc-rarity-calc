import React from 'react'
import './style.css'

const Card = () => {

  return (
    <div className="card-outer">
      <div className="card-frame">
        <div className="card-inner">
          <div className="card-title">
            Dropbear #6657
          </div>
          <img src="https://ipfs.atomichub.io/ipfs/QmcQL6BSuEnmMnz2HZtcku7Az7a6vk9L1HdnFyUNUQskpi" className="card-image" />
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
                Orange
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Fur
              </div>
              <div className="card-attribute-value">
                Gold
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyes
              </div>
              <div className="card-attribute-value">
                Brown
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Attire
              </div>
              <div className="card-attribute-value">
                Black Hoodie
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Watches
              </div>
              <div className="card-attribute-value">
                Rocko
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Mouth
              </div>
              <div className="card-attribute-value">
                Open
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Hat
              </div>
              <div className="card-attribute-value">
                Brown Golf Hat
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Left Hand Object
              </div>
              <div className="card-attribute-value">
                Schooner
              </div>
            </div>
            <div className="card-attribute">
              <div className="card-attribute-name">
                Eyewear
              </div>
              <div className="card-attribute-value">
                Dr Carl Glasses
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
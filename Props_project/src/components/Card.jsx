import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    console.log(props.comp);
    
  return (
    <div>
       <div className="card">
        <div className="top">
          <img
          src={props.brandlogo}
            alt=""
          />
          <button>
            Save <Bookmark />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.comp} <span>{props.dateposted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag1} </h4>
            <h5>{props.tag2} </h5>
          </div>
        </div>
        <div className="bottom">
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import {Link} from 'react-router-dom'
import Truncate from "react-truncate"
function ListBook({library}){
    return (
       	<Link to={{ pathname: `/book/${library.id}`, book:library}}>
                    <div key={library.id} className="card-container">
                        <img src={'http://localhost:8001/images/'+library.image} alt={library.image} />
                        <div className="card-text-container">
                          <h3>{library.title}</h3>
                          <p>
                            <Truncate
                              lines={2}
                              ellipsis={
                                <span>
                                  ... 
                                </span>
                              }
                            >
                              {library.description}
                            </Truncate>
                          </p>
                          {/* <p>{}</p> */}
                        </div>
                    </div>
        </Link>
    )
}

export default ListBook
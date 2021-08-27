import React from 'react'
import Pizza from '../components/Pizza.js'
import pizzas from '../pizzasdata.js'

function Homescreen() {
    return (
        <div>
            <div className='row' style={{ margin: 0 }}>
                {
                    pizzas.map(pizza => {
                        return <div className='col-md-4' >
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Homescreen
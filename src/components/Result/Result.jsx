import React from 'react'
import { useState } from 'react'
import Back from '../common/back/Back'
import './Result.css'
const Result = () => {
    let [isResult, setIsResult] = useState(true);
    return (
        <>
            <Back title='Result' />
            <div className="marque">
                <marquee direction="left">
                    <span>
                        ONGC Scholarship Result Declared 
                    </span>
                    
                </marquee>
            </div>
            <section className='resultmain'>

                <span> Enter Your Application Id here</span>

                <div className="contentResult">

                    <input type='text' placeholder='Enter application id' />
                    <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" />

                </div>

                {isResult ? <>
                    <div className="found">
                        <div className='items shadow'>
                            <div className="foundcontent">

                                <table>
                                    <tr>
                                        <td>Application id</td>
                                        <td>Name</td>
                                        <td>Scholarship</td>
                                        <td>Applied date</td>
                                        <td>Result</td>
                                    </tr>
                                    <tr>
                                        <td>2007345179736</td>
                                        <td>Sitamahalaxmi</td>
                                        <td>Oil N Gas Corporation India LTD</td>
                                        <td>20/12/22</td>
                                        <td>Selected</td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </> : <>
                    
                </>}

            </section>

        </>
    )
}

export default Result
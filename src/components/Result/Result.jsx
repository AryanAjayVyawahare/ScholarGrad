
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Back from '../common/back/Back'
import Header from '../common/header/Header'
import './Result.css'
const Result = () => {
    let [isResult, setIsResult] = useState(false);
    const[applicationid,setApplicationid]=useState();
   const[Obj1,setObj1]=useState();
   const [Obj2,setObj2]=useState();
 

    const getResultCall=()=>{
        axios.get(`http://localhost:8082/user/serachbyapplicationid/${applicationid}`).then(res=>{
            setObj1(res.data);
            setApplicationid("");
        }).catch(err=>{
            console.log(err);
            alert("Server Error")
        })
       axios.get(`http://localhost:8082/user/getresult/${Obj1.scholarshipname}`).then(res=>{
        setObj2(res.data);
        setIsResult(true)
       }).catch(err=>{
        console.log(err);
        alert("Server Error");
       })
       console.log(Obj2);
       console.log(Obj1);
    }

    return (
        <>
        <Header/>
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

                    <input type='text' placeholder='Enter application id'  value={applicationid} onChange={(event)=>{setApplicationid (event.target.value)}}/>
                    <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" style={{marginTop:'1.3rem'}} onClick={getResultCall} />

                </div>

                {isResult ? <>
                    <div className="found">
                        <div className='items shadow'>
                            <div className="foundcontent">

                                <table>
                                    <tr>
                                        <td>Application id</td>
                                        <td>Name</td>
                                        <td>Scholarship id</td>
                                        <td>Scholarship</td>
                                        <td>Result</td>
                                    </tr>
                                    <tr>
                                        <td>{Obj1.applicantid}</td>
                                        <td>{Obj1.name}</td>
                                        <td>{Obj2.scholarshipid}</td>
                                        <td>{Obj1.scholarshipname}</td>
                                        <td>{Obj2.result}</td>
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
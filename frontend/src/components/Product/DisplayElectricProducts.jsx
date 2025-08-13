import { useState , useEffect } from 'react'
import axios from 'axios';


function DisplayElectricProducts() {
  const [data , setData] = useState([])

 

 const API = '/api/electricProducts';

const getData = async()=>{

  try {const res =  await axios.get( 'http://localhost:4001/api/electricProducts'  )

   console.log(res.data) 

   setData(res.data) 
    
  } catch (error) {

    console.log(error)   
  }
}  
useEffect(()=>{
    getData();       
    },[])   
    return (
      <>
      <ul className=''> 
      <p>OKP</p>   
      <p>Total No of electric items: {data.length}</p>
      <br/>
      {console.log('data',data)}
        {
          

            data.map((data)=>
               (
            <div key={data._id}>
            <br/>
            <h2>
            
            </h2>
            <br/>
            <div>
             Description :{data.description}         

            </div>

            
            <br/>
        <img className='rounded-full w-32 h-32'
        src= {data.avatar}
        alt="car"
          />

          <h2>
            
            </h2>
          </div>
          
               ))
      }
      
      </ul> 
      </>      
    )
  }
  

export default DisplayElectricProducts


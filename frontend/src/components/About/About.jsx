 import React, { useState, useEffect } from 'react';
    import axios from 'axios';


    function About() {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        axios.get('https://apifriends.krrsolutions.com/api/users')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          });
      }, []); // Empty dependency array means this runs once on component mount

      if (error) return <p>Error: {error.message}</p>;
      if (!data) return <p>Loading...</p>;

      return (
        <div>
          <h1>Data:</h1>
          <p>Total No of electric items: {data.length}</p>
          {data.map((post)=> {
            const { _id , description , name ,avatar ,price,stock} = post ;
            return <div key = {_id}> 
            <h2> {name}</h2>
         <img className='rounded-full w-32 h-32'
        src= {avatar} />

        <h2><p>description</p>{description}</h2>
        <h2>{price}</h2>
        <h2>{stock}</h2>
         </div>            
          }
        )
          }
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    }

    export default About;
import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function Users() {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        axios.get('https://api.krrsolutions.com/api/users')
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


{data.map((post)=> {
            const { _id , username , email} = post ;
            return <div key = {_id}>
            <h2> {username}</h2>
        

        
        <h2>{email}</h2>
        
         </div>
          }
        )
          }

          
        </div>
      );
    }

    export default Users;


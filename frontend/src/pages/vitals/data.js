import React, { useState, useEffect } from 'react';

function data() {
 
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [weight, setWeight] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const apiUrl = 'https://v1.nocodeapi.com/jhenilparihar/fit/fYQKWnJMppYErKlY/aggregatesDatasets?dataTypeName=steps_count,active_minutes,calories_expended,heart_minutes,sleep_segment,weight&timePeriod=today';

  useEffect(() => {
     async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        // console.log(responseData.steps_count[0].value)
        // setData(responseData);
    
        setSteps(responseData.steps_count[0].value)
        // console.log(responseData.steps_count[0].value);
        // console.log(steps)
        setLoading(false);
        console.log(responseData);
      } catch (err) {
     
        setError(err);
        setLoading(false); 
      }
    }

    fetchData();
  }, []); 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
 console.log(steps);
  return (
    <div>
      <h1>{steps}</h1>
      <ul>
        data
      </ul>
    </div>
  );
}

export default data;

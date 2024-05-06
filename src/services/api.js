const KEY = 'f0821e639fef407a86a10221240605';

const fetchData = async (city) => {
   const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    
   const fetchResponse = await fetch(url);
   const data = await fetchResponse.json();

   return data;
};

export default fetchData;
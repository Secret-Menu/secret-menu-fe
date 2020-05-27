export const fetchLatLng = (address) => {
  const data = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then(res => res.json())
    .then(json => {
      if(json.results[0].geometry.location.lat && json.results[0].geometry.location.lng) 
        return ({
          lat: json.results[0].geometry.location.lat,
          lng: json.results[0].geometry.location.lng, 
        });
      else return ({
        lat: 'error',
        lng: 'error'
      });
    });
  return data;
};

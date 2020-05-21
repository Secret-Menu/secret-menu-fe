export default fetchLatLng(address){
  const data = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
  .then(res => console.log(res.json()));
  return data;
}

const loadQuote = async() => {
    try{
   const res = await fetch('https://api.kanye.rest/');
   const data = await res.json()
   console.log(data)
   }
   catch(error){
    console.log(error)
   }
}
loadQuote()
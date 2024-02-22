const handleApiFlagsCall = async (country: string) => {
  try {
    const fetchResult = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,flags`
    )
    const jsonData = await fetchResult.json()
    return jsonData
  } catch (err) {
    console.log(err)
  }
}

export default handleApiFlagsCall

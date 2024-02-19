const handleAPICall = async (results: string) => {
  try {
    const fetchResult = await fetch(
      `https://randomuser.me/api/?results=${results}`
    )
    const jsonData = await fetchResult.json()
    return jsonData
  } catch (err) {
    console.log(err)
  }
}

export default handleAPICall

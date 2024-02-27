const handleAPICall = async (results: string, page?: string, seed?: string) => {
  let url: string = `https://randomuser.me/api/?results=${results}`

  if (page && seed) {
    url += `&page=${page}&seed=${seed}`
  }

  try {
    const fetchResult = await fetch(url)
    const jsonData = await fetchResult.json()
    return jsonData
  } catch (err) {
    console.log(err)
  }
}

export default handleAPICall

// https://randomuser.me/api/?results=10
// https://randomuser.me/api/?page=3&results=10&seed=abc

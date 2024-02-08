import {useEffect, useState} from 'react'
import './App.css'
import UserCard from './components/user.card/user.card'

import {Data} from './types/Data'

function App() {
  // const userData: Data = {
  //   result: [
  //     {
  //       gender: 'female',
  //       name: {
  //         title: 'Ms',
  //         first: 'Louisa',
  //         last: 'Nicolas',
  //       },
  //       location: {
  //         street: {
  //           number: 9751,
  //           name: 'Rue André-Gide',
  //         },
  //         city: 'Nîmes',
  //         state: 'La Réunion',
  //         country: 'France',
  //         postcode: 23353,
  //         coordinates: {
  //           latitude: '-20.6739',
  //           longitude: '163.8023',
  //         },
  //         timezone: {
  //           offset: '+9:30',
  //           description: 'Adelaide, Darwin',
  //         },
  //       },
  //       email: 'louisa.nicolas@example.com',
  //       login: {
  //         uuid: '9ccef6a8-2a08-436a-8855-b0dbeda8b4de',
  //         username: 'goldenpanda126',
  //         password: 'frontier',
  //         salt: 'NaGnAMGI',
  //         md5: 'c5940911953065b0535da2e1abcaa11f',
  //         sha1: '3782790284560f7b84af9996a48642817b3d263a',
  //         sha256:
  //           'a5007d7b75050d9222e2d54c0497fba15816aeb1994dafc21c1db411850075f5',
  //       },
  //       dob: {
  //         date: '1990-10-15T21:01:56.603Z',
  //         age: 33,
  //       },
  //       registered: {
  //         date: '2017-05-01T05:37:30.453Z',
  //         age: 6,
  //       },
  //       phone: '05-65-72-88-00',
  //       cell: '06-16-68-96-88',
  //       id: {
  //         name: 'INSEE',
  //         value: '2900942734358 58',
  //       },
  //       picture: {
  //         large: 'https://randomuser.me/api/portraits/women/89.jpg',
  //         medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
  //         thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
  //       },
  //       nat: 'FR',
  //     },
  //   ],
  //   info: {
  //     seed: '92cc7b05e64259d9',
  //     results: 1,
  //     page: 1,
  //     version: '1.4',
  //   },
  // }

  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)

  useEffect(() => {
    const handleAPICall = async () => {
      try {
        const fetchResult = await fetch('https://randomuser.me/api/')
        const jsonData = await fetchResult.json()
        setDataApi(jsonData)
      } catch (err) {
        console.log(err)
      }
    }

    handleAPICall()
  }, [])

  return (
    <div className="App">
      <p>App</p>
      {dataApi ? <UserCard user={dataApi.results[0]} /> : <p>Loading...</p>}
    </div>
  )
}

export default App

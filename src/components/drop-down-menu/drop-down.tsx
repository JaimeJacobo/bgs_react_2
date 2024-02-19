import React, {ChangeEvent} from 'react'
import handleAPICall from '../../utilities/api'
import {Data} from '../../types/Data'

type ShowUserProps = {
  setDataApi: React.Dispatch<React.SetStateAction<Data | undefined>>
  setLoadingApi: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDown: React.FC<ShowUserProps> = ({setDataApi, setLoadingApi}) => {
  const handleStateAndApi = async (event: ChangeEvent<HTMLSelectElement>) => {
    setLoadingApi(true)
    const fetchResult = await handleAPICall(event.target.value)
    setDataApi(fetchResult)
    setLoadingApi(false)
  }

  return (
    <>
      <label>Select one option</label>
      <select
        onChange={(event) => {
          handleStateAndApi(event)
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  )
}

export default DropDown

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useContextGlobal } from '../Components/utils/GlobalContext'


const Detail = () => {

  const {state, dispatch} = useContextGlobal()
  const  useParam  = useParams('')

  const urlDentist = 'https://jsonplaceholder.typicode.com/users/' + useParam.id
  useEffect(() => {
    axios(urlDentist)
      .then(res => {dispatch({type:'SET_DENTISTA', payload: res.data})})
      .catch(error => console.log(error))
  }, [])


  return (
    <>
    <div>
      <h1>Detalle id {state.dentista.id}</h1>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Phone
            </th>
            <th>
              Webside
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            {state.dentista.name}
            </td>
            <td>
            {state.dentista.email}
            </td>
            <td>
            {state.dentista.phone}
            </td>
            <td>
            {state.dentista.website}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
    
  )
}
export default Detail

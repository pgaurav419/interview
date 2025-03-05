import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'


const CountryList = () => {
    const navigate = useNavigate();
    const [isCountryValue, setIsCountryValue] = useState("")
    const [isCountryList, setIsCountryList] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleAddCountry = (e) => {
        e.preventDefault()
        setIsCountryValue("")
        setIsFormOpen(false)
        isCountryList.push(isCountryValue)
    }

    const handleRedirect = (_id) => {
        navigate(`/state/${_id}`);
    }

    const handleCountryDelete = (countryName) => {
        alert("Are You want to Delete this country")
        isCountryList?.filter((country) => country !== countryName)
    }

    return (
        <>
            {!isFormOpen && <button onClick={() => setIsFormOpen(true)}>Add Country</button>}
            {isFormOpen &&
                <form onSubmit={handleAddCountry}>
                    <label>Country name</label>
                    <input onChange={(e) => {
                        setIsCountryValue(e.target.value)
                    }} value={isCountryValue} />
                    <button>Submit</button>
                </form>}
            {isCountryList.length > 0 && <table>
                <tr>
                    <th>S No</th>
                    <th>Country Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>State</th>
                </tr>
                {isCountryList?.map((data, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data}</td>
                            <td><button>Edit Country</button></td>
                            <td><button onClick={() => { handleCountryDelete(data) }}>Delete Country</button></td>
                            <td><button onClick={() => { handleRedirect(index + 1) }}>State List</button></td>
                        </tr>
                    )
                })}
            </table>}
        </>
    )
}

export default CountryList
import { useState } from "react"

const CityList = () => {
    const [isCountryValue, setIsCountryValue] = useState("")
    const [isCountryList, setIsCountryList] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)


    const handleAddCountry = (e) => {
        e.preventDefault()
        setIsCountryValue("")
        setIsFormOpen(false)
        isCountryList.push(isCountryValue)
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
                </tr>
                {isCountryList?.map((data, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data}</td>
                            <td><button>Edit Country</button></td>
                            <td><button>Delete Country</button></td>
                        </tr>
                    )
                })}
            </table>}
        </>
    )
}

export default CityList
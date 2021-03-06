import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
const CharmView = () => {
    const [equipmentID, setEquipmentID] = useState(null)
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [recipeName, setRecipeName] = useState('')
    const [materialsObj, setMaterialsObj] = useState({})
    const [equipment, setEquipment] = useState([])
    useEffect(() => {
        axios.get(`https://mhw-db.com/charms`)
            .then(res => {
                setEquipment(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/recipes`, {
            recipeName,
            materialsObj
        })
            .then(res => {
                console.log('Progress posted to our mongoDB' + res)
                history.push(`/charm/${equipmentID}`)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const clickHandler = (equipment) => {
        setRecipeName(equipment.name)
        setEquipmentID(equipment.id)
        setSearch(equipment.name)
    }
    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        <label htmlFor="">Search for your equipment:</label><br />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
                    </p>
                    {equipment.map((equipment, i) => {
                        return (
                            <div key={i}>
                                {search === equipment.name
                                    ? <input type="submit" value="Build" />
                                    : <></>
                                }
                            </div>
                        )
                    })}
                </form>
            </div>
            <div>
                {equipment.map((equipment, i) => {
                    return (
                        <div key={i}>
                            {
                                equipment.name.toLowerCase().includes(search.toLowerCase()) && equipment.name !== search
                                    ? <button onClick={(e) => clickHandler(equipment)}>{equipment.name}</button>
                                    : <></>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharmView;
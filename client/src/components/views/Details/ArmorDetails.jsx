import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const ArmorDetails = () => {
    const { equipment } = useParams();
    const [equipmentDetail, setEquipmentDetail] = useState({})
    const [monsters, setMonsters] = useState([])
    const [materials, setMaterials] = useState([])
    let lastMonster = '';
    useEffect(() => {
        axios.get(`https://mhw-db.com/armor/${equipment}`)
            .then(res => {
                setEquipmentDetail(res.data)
                setMaterials(res.data.crafting.materials)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('https://mhw-db.com/monsters')
            .then(res => {
                setMonsters(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Building {equipmentDetail.name}!</h1>
            <div>
                <h2>Required Mats:</h2>
                {materials.map((material, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                {material.quantity}x {material.item.name}: {material.item.description}
                            </ul>
                        </div>
                    )
                })}
                <h2>Monsters to hunt:</h2>
                {monsters.map((monster, i) => {
                    return (
                        <div key={i}>
                            {materials.map((material, j) => {
                                return (
                                    <div key={j}>
                                        {material.item.description.includes(monster.name) && lastMonster.includes(monster.name)===false
                                            ? <div onLoad={lastMonster += monster.name}>
                                                <h4>{monster.name}</h4>
                                                <h5>Resistances:</h5>
                                                {monster.resistances.map((resistance, l)=>{
                                                    return (
                                                        <p key={l}>{resistance.element[0].toUpperCase()}{resistance.element.slice(1)}</p>
                                                    )
                                                })}
                                                <h5>Weaknesses:</h5>
                                                {monster.weaknesses.map((weakness, k)=>{
                                                    return (
                                                        <p key={k}>{weakness.element[0].toUpperCase()}{weakness.element.slice(1)}-{weakness.stars} star weakness.</p>
                                                    )
                                                })}
                                                <h5>Location(s):</h5>
                                                {monster.locations.map((location, h)=>{
                                                    return (
                                                        <p key={h}>{location.name}</p>
                                                    )
                                                })}
                                            </div>
                                            : <></>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArmorDetails;
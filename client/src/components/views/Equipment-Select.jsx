import React, {useState} from "react";
import {Link} from 'react-router-dom';
import background from "../../imgs/forge.jpeg"

const Equipment=()=>{
    const [weapon, setWeapon]=useState(false)
    const [armor, setArmor]=useState(false)
    const clickHandler=(equipment)=>{
        if(equipment==='weapon'){
            setWeapon(true)
            setArmor(false)
        }
        if(equipment==='armor'){
            setWeapon(false)
            setArmor(true)
        }
    }
    return (
        <div className="forge" style={{ backgroundImage: `url(${background})` }}>
            <div>
                <button className="button" onClick={()=>clickHandler('weapon')}><h1>Weapons</h1></button>
            </div>
            <div>
                <button className="button" onClick={()=>clickHandler('armor')}><h1>Armor</h1></button>
            </div>
            <div>
                <button className="button"><h1>Pendants</h1></button>
            </div>
            <div>
                <button className="button"><h1>Charms</h1></button>
            </div>
            {weapon?
            <div>
                <ul>
                    <button className="button"><Link className="link" to={`/weapon/great-sword`}>Great Sword</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/long-sword'}>Long Sword</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/sword-and-shield'}>Sword and Shield</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/dual-blades'}>Dual Blades</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/hammer'}>Hammer</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/hunting-horn'}>Hunting Horn</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/lance'}>Lance</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/gunlance'}>Gunlance</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/switch-axe'}>Switch Axe</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/charge-blade'}>Charge Blade</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/insect-glaive'}>Insect Glaive</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/light-bowgun'}>Light Bowgun</Link></button>
                    <button className="button"><Link className="link" to={'/weapon/heavy-bowgun'}>Heavy Bowgun</Link></button>
                    <button className="button"><Link className="link" to={'weapon//bow'}>Bow</Link></button>
                </ul>
            </div>
            :armor?
            <div>
                <ul>
                    <button className="button"><Link to={'/armor/head'} className="link">Helmet</Link></button>
                    <button className="button"><Link to={'/armor/chest'} className="link">Chestpiece</Link></button>
                    <button className="button"><Link to={'/armor/gloves'} className="link">Arms</Link></button>
                    <button className="button"><Link to={'/armor/waist'} className="link">Waist</Link></button>
                    <button className="button"><Link to={'/armor/legs'} className="link">Legs</Link></button>
                </ul>
            </div>
            :<></>
            }
        </div>
    )
}

export default Equipment;
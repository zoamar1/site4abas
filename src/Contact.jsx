

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useState } from 'react';

import SideBar from './components/SideBar';
import style from "./Contact.module.css"


export const Contact = () => {

    const position = {
        lat: 29.9773008 , 
        lng: 31.1299206}

        const defaultPhoneNumber = '5541000000000'

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        })
    
        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData({...formData, [name]: value});
        }
    
        const sendWhatsappMessage = () => {
            const {name, email, message} = formData;
            
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
            Nome:%20${name}%0D%0A
            Email:%20${email}%0D%0A
            Mensagem:%20${message}`;
    
            window.open(whatsappUrl, '_blank');
        }

    return (
        <>
            <SideBar />
            <main className={style.main}>
            <h1>Contact</h1>
            <div className={style.map}>
            
            <MapContainer center={[position.lat, position.lng]} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position.lat, position.lng]}>
                    <Popup>
                        <a target='_blank'
                        href={`https://www.google.com/maps/@${position.lat},${position.lng},15z?entry=ttu`}>
                        Piramides do Egito
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
                    <div className={style.whatsapp}>
                    <h2 className={style.whatsappTitle}>Nos envie uma mensagem</h2>
                        <div className={style.container}>
                            <label htmlFor="name" className={style.label}>Nome</label>
                            <input className={style.input} type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                        </div>
                        <div className={style.container}>
                            <label htmlFor="email" className={style.label}>Email</label>
                            <input className={style.input} type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className={style.container}>
                            <label htmlFor="message" className={style.label}>Mensagem</label>
                            <textarea className={style.txtArea} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button className={style.button} onClick={sendWhatsappMessage}>Enviar mensagem</button>
                    </div>
            </main>
        </>
    )
}
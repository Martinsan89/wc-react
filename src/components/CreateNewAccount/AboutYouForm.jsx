import React from 'react'
import Building from '../../assets/Register/Building.svg'
import Phone from '../../assets/Register/Phone.svg'
import Marker from '../../assets/Register/Marker.svg'
import Bank from '../../assets/Register/Bank.svg'
import { Form } from 'react-bootstrap'
import styles from './CreateNewAccount.module.css'

const AboutYouForm = ({setCompany, setPhone, setLocation, setKvk}) => {
  return (
    <Form>
        <div className={`d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-4" controlId="formBasicNumber">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Building } alt="Building Icon" />
                    Company Name
                </Form.Label>
                <Form.Control 
                    style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                    type="text" 
                    placeholder= 'Your company’s name'
                    onChange={(e)=>setCompany(e.target.value)}
                />
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Phone } alt="Phone Icon" />
                    Phone Number
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                type="number" placeholder="Your phone number" onChange={(e)=>setPhone(e.target.value)} />
            </Form.Group>
        </div>
        <div className={`${styles.inputWork} d-flex`}>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicSite">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Marker } alt="Marker Icon" />
                    Address
                </Form.Label>
                <Form.Control style={{width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                type="text" placeholder= 'Where are you located?' onChange={(e)=>setLocation(e.target.value)} /> 
            </Form.Group>
            <Form.Group style={{width: '100%'}} className="mb-3" controlId="formBasicLinkedIn">
                <Form.Label style={{fontWeight: '500', paddingLeft: '5px'}} className='mb-3'>
                    <img className='me-3' src={ Bank } alt="Bank Icon" />
                    KVK Number
                </Form.Label>
                <Form.Control style={{paddingLeft:'20px', width: '90%', borderRadius: '1rem', color: '#B3B1B4', fontWeight: '300'}} 
                type="number" placeholder="Your KVK Number" onChange={(e)=>setKvk(e.target.value)} />
            </Form.Group>
        </div>
    </Form>
  )
}

export default AboutYouForm
import React from 'react'
import './UserProfile.css';
import user from '../utiles/user.json'
import { HobbieChip } from './HobbieChip'
import { ImageSetItem } from './ImageSetItem'


export const UserProfile: React.FC = () => {

    

    return <>
        
        <div className='container center-align page-wrapper'>

            <div className='container'>
                <i className="large material-icons">account_circle</i>
                <div><h4>{ user.name }</h4></div>
            </div>

            <div className='container'>
                <div className="chip birthdaychip blue lighten-4">
                    <i className="material-icons">cake</i>
                    { user.birthdate }
                </div>
            </div>

            <div className='container'>
                {
                    user.hobbies.map(item => {
                        return (
                            <HobbieChip hobbie={item} />
                        )
                    })
                }
            </div>

            
            <div className='row center-align image-row'>
                {
                    user.img.map(item => {
                        return (
                            <ImageSetItem src={item} />
                        )
                    })
                }
            </div>

        </div>
        
    </>
}
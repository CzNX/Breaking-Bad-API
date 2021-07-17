import React from 'react'
import './Character.css'
const Character = ({ name, nickname, birthday, status, portrayed, img, occupation }) => {
    return (
        <section className='flip-box'>
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <img src={img} alt="err" />
                </div>
                <div className="flip-box-back">
                    <h1 className='name'>{name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {nickname}</li>
                        <li>
                            <strong>Birthday:</strong> {birthday}</li>
                        <li>
                            <strong>Status:</strong> {status}
                        </li>
                        <li>
                            <strong>Occupation: </strong>
                            {occupation}

                        </li>

                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Character

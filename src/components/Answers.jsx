import React from 'react'
import Checkbox from './Checkbox'
import classs from '../styles/Answer.module.css'

const Answers = () => {
    return (
        <div className={classs.Answers}>
            <Checkbox clasName={classs.Answers} text="Test answer"/>
        </div>
    )
}

export default Answers

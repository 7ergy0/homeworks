import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void// need to fix any
    addUser: ()=>void
    keyEnter:(e:KeyboardEvent<HTMLInputElement>)=>void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser,keyEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error?s.errorInput:s.input// need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={keyEnter}/>
            <button onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting

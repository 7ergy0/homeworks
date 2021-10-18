import React, {ChangeEvent, useState,KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users:UserType[] // need to fix any
    addUserCallback:(name:string)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value)
            setError("") // need to fix

    }
    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name.trim()}  !`)
            setName("")
        }else {
            setError("Name is required")
           // need to fix
        }
    }
    const keyEnter = (e:KeyboardEvent<HTMLInputElement>) => {

      if(e.key==="Enter") {
          addUser()
          setName("")
      }
    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            keyEnter={keyEnter}
        />
    )
}

export default GreetingContainer

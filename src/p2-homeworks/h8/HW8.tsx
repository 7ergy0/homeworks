import React, {useState} from 'react'
import {CheckAC, homeWorkReducer, SortUpDownAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p) => (
        <div key={p._id} className={s.items}>
            <span>{p.name}</span>
                {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpDownAC("up")))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortUpDownAC("down")))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, CheckAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
           <SuperButton onClick={check18}>check 18</SuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

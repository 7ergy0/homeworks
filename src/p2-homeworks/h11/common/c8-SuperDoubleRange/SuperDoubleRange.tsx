import React, {useState} from 'react'
import './SuperDoubleRange.module.css'
import { Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange: (value: number[]) => void
    value: [number, number]
    min: number
    max: number
    step: number
    disable: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disable
    }
) => {

    const [value1, setValue1] = useState([min, max])

    const onChangeCallback = (e: Event, values: number | number[]) => {
        onChangeRange(values as number[]);
        setValue1(value1)
    };
    return (
            <Slider
                sx={{ width: 300}}
                aria-label={'Custom marks'}
                step={step}
                min={min}
                max={max}
                marks
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                disableSwap
                disabled={disable}
            />
    );
}
export default SuperDoubleRange;

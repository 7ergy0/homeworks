import React from 'react'
import './SuperDoubleRange.module.css'
import {Box, Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    step: number
   //, disable, ...
    //, disable, ...
}



const minDistance = 10;
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step,// disable, ...re

    }

) => {
    const [value1, setValue1] = React.useState<number[]>([min,max]);

    const handleChange1 = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number[]);









    };

    // const handleChange1 = (
    //     event: Event,
    //     value: number | number[],
    //     activeThumb: number,
    // ) => {
    //     if (!Array.isArray(value)) {
    //         return;
    //     }
    //
    //     if (activeThumb === 0) {
    //         setValue1([Math.min(value[0], value1[1] - minDistance), value1[1]]);
    //     } else {
    //         setValue1([value1[0], Math.max(value[1], value1[0] + minDistance)]);
    //     }
    // };

    return (
        <Box sx={{width: 300}}>

            <Slider
                aria-label={'scale'}
                step={step}
                marks
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                disableSwap
            />

        </Box>
    );

}

export default SuperDoubleRange;

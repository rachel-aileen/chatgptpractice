import { Grid } from '@mui/material'
import React from 'react'
import Attach from './Attach'
import Type from './Type'
import Send from './Send'

export default function UserInput() {
    return (
        <div className='userInput'>

            <Grid
                container
                style={{ height: "100%" }}
            >

                <Grid item xs={2}>
                    <Attach />
                </Grid>




                <Grid item xs={9}>
                    <Type />
                </Grid>



                <Grid item xs={1}>
                    <Send />
                </Grid>


            </Grid>

        </div>
    )
}

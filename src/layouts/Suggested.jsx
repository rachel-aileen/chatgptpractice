import { Grid } from '@mui/material'
import React from 'react'
import Suggestion from './Suggestion'

export default function Suggested() {
    return (
        <div className='suggested'>

            <Grid container
                style={{ height: "100%" }}
            >

                <Grid item xs={6}>
                    <Suggestion />
                </Grid>

                <Grid item xs={6}>
                    <Suggestion />
                </Grid>

                <Grid item xs={6}>
                    <Suggestion />
                </Grid>

                <Grid item xs={6}>
                    <Suggestion />
                </Grid>


            </Grid>


        </div>
    )
}

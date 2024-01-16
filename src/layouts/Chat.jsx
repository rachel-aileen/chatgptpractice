import { Grid } from '@mui/material'
import React from 'react'
import Messages from './Messages'
import Suggested from './Suggested'

export default function Chat() {
    return (
        <div className='chat'>
            <Grid
                container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item xs={8}>
                    <Messages />
                </Grid>

                <Grid item xs={4}>
                    <Suggested />
                </Grid>


            </Grid>
        </div>
    )
}

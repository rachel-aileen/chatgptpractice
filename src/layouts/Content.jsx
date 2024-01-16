import { Grid } from '@mui/material'
import React from 'react'
import Chat from './Chat'
import UserInput from './UserInput'

export default function Content() {
    return (
        <div className='content'>
            <Grid container
                direction="column"
                style={{ height: "100%" }}
            >

                <Grid item
                    xs={11}
                >
                    <Chat />
                </Grid>


                <Grid item
                    xs={1}
                >

                    <UserInput />

                </Grid>

            </Grid>
        </div>
    )
}

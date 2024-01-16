import { Grid } from '@mui/material'
import React from 'react'

export default function LogoBox() {
    return (
        <div className='logoBox'>


            <Grid container
                alignItems="center"
                justifyContent="center"
            >

                <Grid item
                    xs={9}


                >

                    <p>Pucci Rangers </p>
                </Grid>

                <Grid item xs={3}>

                    <button>Add</button>
                </Grid>


            </Grid>


        </div>
    )
}

import { Grid } from '@mui/material'
import React from 'react'
import LogoBox from './LogoBox'
import ListBox from './ListBox'
import SettingBox from './SettingBox'

export default function Navbar() {
    return (
        <div className='navbar'>

            <Grid
                container
                direction="column"
                style={{ height: "100%" }}
            >



                <Grid item xs={1}>
                    <LogoBox />
                </Grid>



                <Grid item xs={10} >
                    <ListBox />

                </Grid>



                <Grid item xs={1}>
                    <SettingBox />
                </Grid>


            </Grid>


        </div>
    )
}


import { Grid } from '@mui/material';
import './App.css';
import Navbar from './layouts/Navbar';
import Content from './layouts/Content';



function App() {
  return (
    <div>

      <Grid
        container

      >

        <Grid item xs={3}>
          <Navbar />
        </Grid>

        <Grid item xs={9}>

          <Content />
        </Grid>

      </Grid>




    </div>
  );
}

export default App;

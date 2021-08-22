import { Outlet } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './MainLayout.scss';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MaskGroup from './Assets/Mask Group.png';
import Frame from './Assets/Frame.png';

/* eslint-disable global-require */
const MainLayout = () => (
  <div>
    <Grid container xs={12} className="MainLayoutWrapper">
      <Grid item lg={6} md={6} sm={7} xs={12} className="outletWrapper">
        <Grid container xs={12} className="headerWrapper">
          <Grid item xs={3}>
            <img alt="" src={Frame} />
          </Grid>
          <Grid item xs={6} sm={9} id="pricingBtns">
            <button type="button" className="PricingPlan">
              Pricing Plans
            </button>
            <FormControl variant="outlined" className="dropdown">
              <InputLabel id="demo-simple-select-outlined-label">
                Language
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="English"
              >
                <MenuItem value="">
                  <em>English</em>
                </MenuItem>
                <MenuItem value={10}>Hindi</MenuItem>
                <MenuItem value={20}>French</MenuItem>
                <MenuItem value={30}>Italian</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Outlet />
      </Grid>
      <Grid item lg={6} md={6} sm={5} xs={0} className="mainImgWrapper">
        <img alt="" src={MaskGroup} />
      </Grid>
    </Grid>
  </div>
);

export default MainLayout;

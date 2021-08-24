import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

/* eslint-disable react/jsx-wrap-multilines, react/jsx-indent, react/jsx-one-expression-per-line */

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

const Suppliers = () => {
  const [ChooseOptions, setChooseOptions] = React.useState({
    TextileFabrics: false,
    Leather: false,
    SemiFinished: false,
    ManufacturerFinishedProduct: false,
    ChemicalProducts: false,
    MachineryTechnology: false
  });

  const handleChangeChooseOptions = (event) => {
    setChooseOptions({
      ...ChooseOptions,
      [event.target.name]: event.target.checked
    });
  };

  const [ChooseTypes, setChooseTypes] = React.useState({
    RawMaterial: false,
    ProcessingFinishingFactory: false,
    TraderWholesaler: false,
    Other: false
  });
  const handleChangeChooseTypes = (event) => {
    setChooseTypes({
      ...ChooseTypes,
      [event.target.name]: event.target.checked
    });
  };
  const [IndustryUsage, setIndustryUsage] = React.useState({
    ConnectWithBrands: false,
    UnlockNewMarkets: false,
    Branding: false,
    Recruiting: false,
    TrendsForecasting: false,
    Partnerships: false,
    Prospecting: false,
    Marketing: false
  });
  const handleChangeIndustryUsage = (event) => {
    setIndustryUsage({
      ...IndustryUsage,
      [event.target.name]: event.target.checked
    });
  };
  const [Terms, setTerms] = React.useState({
    TermAndAgreement1: false,
    TermAndAgreement2: false
  });
  const handleChangeTerms = (event) => {
    setTerms({
      ...Terms,
      [event.target.name]: event.target.checked
    });
  };
  return (
    <div>
      <Grid container xs={12}>
        <p className="contentHeader" style={{ margin: '25px 0' }}>
          Choose Options
          <span className="spanColor"> {' (Select 1 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.TextileFabrics}
                onChange={handleChangeChooseOptions}
                name="TextileFabrics"
              />
            }
            label="Textile/Fabrics"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.Leather}
                onChange={handleChangeChooseOptions}
                name="Leather"
              />
            }
            label="Leather"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.SemiFinished}
                onChange={handleChangeChooseOptions}
                name="SemiFinished"
              />
            }
            label="Semi-Finished Components"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.ManufacturerFinishedProduct}
                onChange={handleChangeChooseOptions}
                name="ManuFacturerFinishedProduct"
              />
            }
            label="Manufacturer Finished Product"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.ChemicalProducts}
                onChange={handleChangeChooseOptions}
                name="ChemicalProducts"
              />
            }
            label="Chemical Products"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseOptions.MachineryTechnology}
                onChange={handleChangeChooseOptions}
                name="MachineryTechnology"
              />
            }
            label="Machinery & Technology"
          />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <p className="contentHeader" style={{ margin: '25px 0' }}>
          Choose Type
          <span className="spanColor"> {' (Select 1 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.RawMaterial}
                onChange={handleChangeChooseTypes}
                name="RawMaterial"
              />
            }
            label="Raw Material"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.ProcessingFinishingFactory}
                onChange={handleChangeChooseTypes}
                name="ProcessingFinishingFactory"
              />
            }
            label="Processing / Finishing Factory"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.TraderWholesaler}
                onChange={handleChangeChooseTypes}
                name="TraderWholesaler"
              />
            }
            label="Trader / Wholesaler"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.Other}
                onChange={handleChangeChooseTypes}
                name="Other"
              />
            }
            label="Other"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.ChemicalProducts}
                onChange={handleChangeChooseTypes}
                name="ChemicalProducts"
              />
            }
            label="Chemical Products"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.MachineryTechnology}
                onChange={handleChangeChooseTypes}
                name="MachineryTechnology"
              />
            }
            label="Machinery & Technology"
          />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <p className="contentHeader" style={{ margin: '25px 0' }}>
          Your Industry Usage
          <span className="spanColor"> {' (Select 2 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.ConnectWithBrands}
                onChange={handleChangeIndustryUsage}
                name="ConnectWithBrands"
              />
            }
            label="Connect With Brands"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.UnlockNewMarkets}
                onChange={handleChangeIndustryUsage}
                name="UnlockNewMarkets"
              />
            }
            label="Unlock New Markets"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Branding}
                onChange={handleChangeIndustryUsage}
                name="Branding"
              />
            }
            label="Branding"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Recruiting}
                onChange={handleChangeIndustryUsage}
                name="Recruiting"
              />
            }
            label="Recruiting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.TrendsForecasting}
                onChange={handleChangeIndustryUsage}
                name="TrendsForecasting"
              />
            }
            label="Trends Forecasting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Partnerships}
                onChange={handleChangeIndustryUsage}
                name="Partnerships"
              />
            }
            label="Partnerships"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Prospecting}
                onChange={handleChangeIndustryUsage}
                name="Prospecting"
              />
            }
            label="Prospecting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Marketing}
                onChange={handleChangeIndustryUsage}
                name="Marketing"
              />
            }
            label="Marketing"
          />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        {/* <p className="contentHeader" style={{ margin: '25px 0' }}>
          Your Industry Usage
          <span className="spanColor"> {' (Select 2 max)'}</span>
        </p> */}
        <Grid item xs={8} style={{ marginTop: '30px' }}>
          <p className="contentHeader" style={{ margin: '25px 0' }}>
            Organization Registration Number
          </p>
          <TextField
            id="outlined-basic"
            label="0G68975 - P009 - P"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} style={{ marginTop: '30px' }}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={Terms.TermAndAgreement1}
                onChange={handleChangeTerms}
                name="TermAndAgreement1"
              />
            }
            label="I confirm that I am a legal representative of this company and I have the right to act on behalf of this company"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={Terms.TermAndAgreement2}
                onChange={handleChangeTerms}
                name="TermAndAgreement2"
              />
            }
            label={
              <p>
                I agree with the
                <Link to="#" style={{ color: '#55BAFF' }}>
                  {' Terms & Conditions '}
                </Link>
                and{' '}
                <Link to="#" style={{ color: '#55BAFF' }}>
                  {' Privacy Policy '}
                </Link>
              </p>
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Suppliers;

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

const FashionBrands = () => {
  const [ChooseTypes, setChooseTypes] = React.useState({
    Footwear: false,
    Handbag: false,
    Accessories: false,
    Apparel: false
  });
  const handleChangeChooseTypes = (event) => {
    setChooseTypes({
      ...ChooseTypes,
      [event.target.name]: event.target.checked
    });
  };
  const [IndustryUsage, setIndustryUsage] = React.useState({
    Branding: false,
    FindSuppliers: false,
    SourceMaterials: false,
    Recruiting: false,
    Partnerships: false,
    TrendForecasting: false,
    Networking: false,
    Marketing: false,
    Footwear: false,
    Handbags: false,
    Accessories: false,
    GarmentClothing: false
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
          Choose Type
          <span className="spanColor"> {' (Select 1 max)'}</span>
        </p>
        <Grid item xs={12}>
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.Footwear}
                onChange={handleChangeChooseTypes}
                name="Footwear"
              />
            }
            label="Footwear"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.Handbag}
                onChange={handleChangeChooseTypes}
                name="Handbag"
              />
            }
            label="Handbag"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.Accessories}
                onChange={handleChangeChooseTypes}
                name="Accessories"
              />
            }
            label="Accessories"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={ChooseTypes.Apparel}
                onChange={handleChangeChooseTypes}
                name="Apparel"
              />
            }
            label="Apparel"
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
                checked={IndustryUsage.FindSuppliers}
                onChange={handleChangeIndustryUsage}
                name="FindSuppliers"
              />
            }
            label="Find Suppliers"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.SourceMaterials}
                onChange={handleChangeIndustryUsage}
                name="SourceMaterials"
              />
            }
            label="Source Materials"
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
                checked={IndustryUsage.TrendForecasting}
                onChange={handleChangeIndustryUsage}
                name="TrendForecasting"
              />
            }
            label="Trend Forecasting"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Networking}
                onChange={handleChangeIndustryUsage}
                name="Networking"
              />
            }
            label="Networking"
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
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Footwear}
                onChange={handleChangeIndustryUsage}
                name="Footwear"
              />
            }
            label="Footwear"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Handbags}
                onChange={handleChangeIndustryUsage}
                name="Handbags"
              />
            }
            label="Handbags"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.Accessories}
                onChange={handleChangeIndustryUsage}
                name="Accessories"
              />
            }
            label="Accessories"
          />
          <FormControlLabel
            className="spanColor"
            control={
              <GreenCheckbox
                checked={IndustryUsage.GarmentClothing}
                onChange={handleChangeIndustryUsage}
                name="GarmentClothing"
              />
            }
            label="Garment & Clothing"
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
export default FashionBrands;

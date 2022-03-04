import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    // label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://c8.alamy.com/comp/T0K76X/geography-travel-belgium-ghent-buildings-old-palace-of-justice-built-1836-1846-exterior-view-illustration-from-denkmaeler-der-kunst-monuments-of-art-by-wilhelm-luebke-and-carl-von-luetzow-3rd-edition-stuttgart-1879-volume-2-steel-engraving-chapter-on-architecture-plate-lxiii-denkmaler-denkmler-lubke-lbke-lutzow-ltzow-europe-justice-palace-palaces-neo-classicism-neo-classical-neoclassical-classical-classic-classicism-19th-century-flanders-historic-historical-belgian-additional-rights-clearance-info-not-available-T0K76X.jpg",
  },
  {
    // label: "Bird",
    imgPath:
      "https://w0.peakpx.com/wallpaper/343/655/HD-wallpaper-library-girl-brunette-girl-books-library-black-white.jpg",
  },
  {
    // label: "Bali, Indonesia",
    imgPath:
      "https://www.photo-visible.com/images-photo/2011/9/800/800_662.jpg",
  },
  {
    imgPath:
      "https://cutewallpaper.org/24/black-and-white-library-wallpaper/2435011836.jpg",
  },
  {
    imgPath: "https://data.whicdn.com/images/338152838/original.jpg",
  },
  {
    imgPath:
      "https://www.clickprophotographers.com/dailyproject/wp-content/uploads/2017/08/silhouette-girl-reading-library-window-black-white-by-KelleyKPhotography-Smyrna.jpg ",
  },
  {
    imgPath:
      "https://www.refugeecouncil.org.au/wp-content/uploads/2018/02/University_library-750x500.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="carusel_container">
        <Box sx={{ maxWidth: 1400, flexGrow: 1, mx: "auto" }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 30,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 550,
                      display: "block",
                      maxWidth: 1300,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </>
  );
}

export default SwipeableTextMobileStepper;

import { Button, FormControl, Grid, Paper } from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "./SideBar.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <div className="container_sidebar">
            <Button
              sx={{ color: "#150050" }}
              value="bestsellers"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              bestsellers
            </Button>
            <Button
              sx={{ color: "#150050" }}
              value="topsales"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              top sales
            </Button>
            <Button
              sx={{ color: "#150050" }}
              value="
              novelty"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              novelty
            </Button>
            <Button
              sx={{ color: "#150050" }}
              value="
              popular"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              popular
            </Button>
            <Button
              sx={{ color: "#150050" }}
              value=""
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              all
            </Button>
          </div>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;

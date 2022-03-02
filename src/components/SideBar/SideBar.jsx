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
              value="bestsellers"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              bestsellers
            </Button>
            <Button
              value="topsales"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              top sales
            </Button>
            <Button
              value="
              novelty"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              novelty
            </Button>
            <Button
              value="
              popular"
              onClick={(e) => fetchByParams("type", e.target.value)}
            >
              popular
            </Button>
          </div>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;

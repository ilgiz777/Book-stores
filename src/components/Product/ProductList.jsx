import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "./ProdutsCart";
// import SideBar from "../SideBar/SideBar";
// import "./styles/ProductList.css";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div style={{ display: "flex", backgroundColor: "#000" }}>
        <div className="side-bar">{/* <SideBar /> */}</div>

        <TextField
          className="text-field"
          color="warning"
          label="Search"
          variant="standard"
          sx={{ margin: "2vw", width: "10vw" }}
        />
        <div className="blog-left">
          <Grid container spacing={6}>
            {products ? (
              products.map((item) => (
                <Grid item>
                  {/* <ProductCard item={item} key={item.id} /> */}
                  <MediaCard item={item} key={item.id} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ProductList;

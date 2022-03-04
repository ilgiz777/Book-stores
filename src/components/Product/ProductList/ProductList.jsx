import { Badge, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";
import MediaCard from "../ProdutsCart/ProdutsCart";
import SideBar from "../../SideBar/SideBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import "../ProductList/ProductList/.css";
import "./ProductList.css";

import Genre from "../../Genre/Genre";
import { ADMIN } from "../../../helpers/consts";
import { useAuth } from "../../../contexts/AuthContext";

const ProductList = ({ products }) => {
  const { cart } = useProducts();

  const {
    user: { email },
  } = useAuth();

  const { getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <>
      <div className="producs_header">
        <Genre />
        <div className="side-bar">
          <SideBar />
        </div>
        <TextField
          color="warning"
          className="text-field"
          label="Search"
          variant="standard"
          sx={{ margin: "2vw", width: "10vw", bgcolor: "warning" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {email == ADMIN ? null : (
          <Link to="/cart">
            <Button sx={{ my: 2, color: "white" }}>
              <Badge badgeContent={cart?.products ? cart.products.length : 0}>
                <ShoppingCartIcon sx={{ color: "#f0a500" }} />
              </Badge>
            </Button>
          </Link>
        )}
      </div>
      <div style={{ display: "flex", backgroundColor: "#150050" }}>
        <div style={{ display: "flex", backgroundColor: "" }}>
          <div className="blog-left">
            <Grid container spacing={6}>
              {products ? (
                products.map((item) => (
                  <Grid item>
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
      </div>
    </>
  );
};

export default ProductList;

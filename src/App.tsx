import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import { getData, GithubRepo } from "./api";

function App() {
  const [infoData, setData] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ bgcolor: "black"}}
      >
        <Toolbar>
          <Typography variant="h6" color="white">
            Git Repositories MADScorpion25
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} style={{ marginTop: 50 }}
        id="cards"
        sx={{
          mt: 6,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}>
        {infoData.map((card) => (
          <Grid item xs={6}>
            <Card key={card.id} sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 5,
              m: 5,
            }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center"> {card.name} </Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  textAlign="justify"
                  gutterBottom>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
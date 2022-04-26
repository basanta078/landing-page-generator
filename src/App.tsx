import { Container, Grid, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import { Editor } from './components/editor/Editor';
import { LandingPage } from './components/landingPage/LandingPage';
import { EditorContextProvider } from './context/EditorContext';
import { sample } from './sample';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EditorContextProvider value={{data: JSON.stringify(sample)}}>
        <Container>
          Welcome to Landing page generator

          <Grid container spacing={2} sx={{
            py: 2,
            mt: 2,
          }}>
            <Grid item xs={6}>
              <Editor />
            </Grid>
            <Grid item xs={6} sx={{
              border: 1,
              py: 2,
            }}>
              <LandingPage />
            </Grid>
          </Grid>
        </Container> 
      </EditorContextProvider>
    </ThemeProvider>
    
  );
}

export default App;

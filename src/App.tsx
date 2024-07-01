import React from 'react';
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
import {PageInfo} from "./app/shared/PageInfo";

const theme = createTheme({
    typography:{
        fontFamily: [
            'Inter'
        ].join(','),
        fontSize: 14,
    }
})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
            <Box>
                <PageInfo title={"Спортивная Организация Алтайского Края"} />
            </Box>
            <Box></Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;

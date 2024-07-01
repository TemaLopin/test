import React from 'react';
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
import {PageInfo} from "./app/shared/PageInfo";

const theme = createTheme({
    typography: {
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
                <Box sx={{display: 'flex'}}>
                    <PageInfo title={"Спортивная Организация Алтайского Края"}/>
                    <Box sx={{flex: '0 1 34%'}}>Тут что-то будет</Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}

export default App;

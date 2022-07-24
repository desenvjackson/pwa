import * as React from 'react';
import { Card, Stack, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";





function NavBar() {
    return (
        <Card>
            <Stack flexDirection={'row'} justifyContent={'space-around'}>
                <Typography>
                    My Social asdsad
                </Typography>

                <TextField>
                    PESQUISA
                </TextField>
            </Stack>
        </Card>

    );
}


export default NavBar
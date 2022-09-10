import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

function Header() {
    return (
        <div>
            <Button variant="contained">Hello World</Button>
            <AccountCircleIcon fontSize='large'/>
            <h2>Hello World</h2>
        </div>
    )
}

export default Header
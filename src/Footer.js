import React from 'react';
import "./Footer.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Icon, IconButton } from '@mui/material';

function Footer() {
    return (
        <footer className='footer'>
            <IconButton>
            <MessageIcon fontSize='large'/>
            </IconButton>
            <IconButton>
            <AccountCircleIcon fontSize='large'/>
            </IconButton>
            <IconButton>
            <EmojiPeopleIcon fontSize='large'/>
            </IconButton>
        </footer>
    )
}

export default Footer
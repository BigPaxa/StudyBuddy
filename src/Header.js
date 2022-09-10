import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function Header() {
    return (
        <div>
            <MessageIcon fontSize='large'/>
            <AccountCircleIcon fontSize='large'/>
            <EmojiPeopleIcon fontSize='large'/>
            <h2>Hello World</h2>
        </div>
    )
}

export default Header
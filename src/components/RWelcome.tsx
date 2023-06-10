import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function RWelcome(){
    const [userName, setUserName] = useState('')

    useEffect(() => {
        const storedName = localStorage.getItem('name')
        if(storedName) setUserName(storedName)
    }, [userName])

    return(
        <Box className={`${userName ? '' : 'hidden'}`}>
            <Typography variant="h4" component="h4">
                Hello, {userName}
            </Typography>
        </Box>
    )
}
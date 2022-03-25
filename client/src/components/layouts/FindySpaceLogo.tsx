import { Typography } from "@mui/material";

function FindySpace(){
    return(
        <Typography sx={{ flexGrow: 1, fontWeight: 500, fontSize: { xs: '.9rem', sm: '1.2rem', md: '1.5rem' }  }}>
            Findy<span style={{color: '#5D33D5'}}>space</span>
        </Typography>
    )
}

export default FindySpace;
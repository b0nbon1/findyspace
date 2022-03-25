import { Facebook, Instagram, LinkedIn, Twitter, YoutubeSearchedForRounded } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface SocialIcon {
    id: number;
    name: string;
    icon: string;
}

const SocialIcons = [{
    id: 1,
    name: 'Facebook',
    icon: '/icons/facebook.svg'
}, {
    id: 2,
    name: 'Instagram',
    icon: '/icons/Insta.svg'
}, {
    id: 3,
    name: 'LinkedIn',
    icon: '/icons/linkedIn.svg'
}, {
    id: 4,
    name: 'Twitter',
    icon: '/icons/twitter-icon.svg'
}, {
    id: 5,
    name: 'Youtube',
    icon: '/icons/youtube-icon.svg'
}]

function ContactInfo() {
    return (
        <Container maxWidth="lg" sx={{ my: 10, width: '90%', backgroundColor: '#background: #F8FAFC' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{width: '40%'}}>
                    <Typography variant='h5'>Connect with us on our socials </Typography>
                    <Box sx={{
                        pt: 2,
                        display: { sm: 'block', md: 'flex' },
                        justifyContent: 'space-between'
                    }}>{SocialIcons.map((social) => <Socials {...social} />)}</Box>
                </Box>
                <Paper elevation={3} sx={{ borderRadius: '.5rem', width: '50%' }}>
                    <Typography variant='h5' sx={{ p: 2,}}>Contact Information</Typography>
                    <hr style={{ width: '90%', color: '#E6E6ED' }} />
                    <List sx={{p:2}} >
                        <ListItem sx={{p:2}}>
                            <ListItemIcon>
                                <img src='/icons/find-us.svg' />
                            </ListItemIcon>
                            <ListItemText primary="4140 Parker Rd. Allentown, New Mexico 31134" />
                        </ListItem>
                        <ListItem sx={{p:2}}>
                            <ListItemIcon>
                                <img src='/icons/phone.svg' />
                            </ListItemIcon>
                            <ListItemText primary="(603) 555-0123" />
                        </ListItem>
                        <ListItem sx={{p:2}}>
                            <ListItemIcon>
                                <img src='/icons/mail-to.svg' />
                            </ListItemIcon>
                            <ListItemText primary="contact@findy.space" />
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </Container>

    )
}

function Socials({ name, icon }: SocialIcon) {
    return (
        <Box>
            <img src={icon} alt={name} />
        </Box>
    )
}

export default ContactInfo;
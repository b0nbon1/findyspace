import React from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface SocialIcon {
  id: number;
  name: string;
  icon: string;
}

const SocialIcons = [
  {
    id: 1,
    name: 'Facebook',
    icon: '/icons/facebook.svg',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: '/icons/Insta.svg',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: '/icons/linkedIn.svg',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: '/icons/twitter-icon.svg',
  },
  {
    id: 5,
    name: 'Youtube',
    icon: '/icons/youtube-icon.svg',
  },
];

function ContactInfo() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 10,
        px: 0,
        m: 0,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '40%' },
          order: { xs: 2, sm: 2, md: 1 },
          py: { xs: 6, sm: 4, md: 1 },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
        >
          Connect with us on our socials{' '}
        </Typography>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          {SocialIcons.map((social) => (
            <Socials key={social.id} {...social} />
          ))}
        </Box>
      </Box>
      <Paper
        elevation={2}
        sx={{
          borderRadius: '.5rem',
          width: { xs: '100%', sm: '100%', md: '55%' },
          order: { xs: 1, sm: 1, md: 2 },
        }}
      >
        <Typography variant="h5" sx={{ p: 4 }}>
          Contact Information
        </Typography>
        <hr style={{ width: '90%', color: '#E6E6ED' }} />
        <List sx={{ p: 2 }}>
          <ListItem sx={{ px: 2, pt: 4 }}>
            <ListItemIcon>
              <img src="/icons/find-us.svg" alt="find us icon" />
            </ListItemIcon>
            <ListItemText primary="4140 Parker Rd. Allentown, New Mexico 31134" />
          </ListItem>
          <ListItem sx={{ px: 2, py: 4 }}>
            <ListItemIcon>
              <img src="/icons/phone.svg" alt="phone icon" />
            </ListItemIcon>
            <ListItemText primary="(603) 555-0123" />
          </ListItem>
          <ListItem sx={{ px: 2, pb: 6 }}>
            <ListItemIcon>
              <img src="/icons/mail-to.svg" alt="mailto icon" />
            </ListItemIcon>
            <ListItemText primary="contact@findy.space" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

function Socials({ id, name, icon }: SocialIcon) {
  return (
    <Box key={id}>
      <img src={icon} alt={name} />
    </Box>
  );
}

export default ContactInfo;

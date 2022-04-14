import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const faqs = [
  {
    id: 1,
    question: 'Who can be a host?',
    answer: 'As long as you have space to rent out you can be a host',
  },
  {
    id: 2,
    question: 'What do I require to start hosting?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quisquam facere pariatur beatae amet molestiae, Molestias.',
  },
  {
    id: 3,
    question: 'What can I host in my space?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quisquam facere pariatur beatae amet molestiae, Molestias.',
  },
  {
    id: 4,
    question: 'How do I get paid?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quisquam facere pariatur beatae amet molestiae, Molestias.',
  },
];

function FAQs() {
  const [expanded, setExpand] = React.useState<string | number>(1);
  const handleChange = (id: string | number) => {
    if (expanded === id) {
      setExpand('');
    } else {
      setExpand(id);
    }
  };
  return (
    <Container maxWidth="lg" sx={{ width: '90%', my: 10 }}>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          height: {
            xs: '0.6rem',
            md: '1rem',
          },
          display: 'flex',
          alignItems: 'flex-end',
          mb: 4,
          '&::before, &::after': {
            content: '""',
            flex: 1,
            borderTop: '1px solid #E6E6ED',
            height: { xs: '0.6rem', md: '1rem' },
          },
        }}
      >
        <Box sx={{ mx: '1rem' }}>
          <Typography
            sx={{
              color: '#5D33D5',
              width: '100%',
              fontSize: { xs: '0.875rem', md: '1.1rem' },
            }}
          >
            FAQs
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '.8rem', sm: '1.2rem', md: '2rem' },
              fontWeight: 700,
              width: '100%',
            }}
          >
            Most Asked Questions
          </Typography>
        </Box>
      </Box>
      {faqs.map(({ question, answer, id }) => (
        <Accordion
          key={id}
          elevation={0}
          onChange={() => handleChange(id)}
          expanded={expanded === id}
          sx={{
            border: '1px solid #E6E6ED',
            borderRadius: '8px !important',
            '&::before': { height: 0 },
            my: 2,
          }}
        >
          <AccordionSummary expandIcon={<AddCircleOutlineIcon />}>
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ mt: 4, fontSize: { xs: '0.875rem', md: '1rem' } }}>
        Want to know more? Check out our{' '}
        <Link sx={{ textDecoration: 'none' }} href="/help-desk">
          Help Center
        </Link>{' '}
        for more information.
      </Typography>
    </Container>
  );
}

export default FAQs;

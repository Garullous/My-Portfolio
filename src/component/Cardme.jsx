import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia
} from '@mui/material';

function Cardme({ title, description, image, githubUrl }) {
  return (
    <Box paddingY='20px' width='600px'>
      <Card sx={{ '&:hover': { boxShadow: '0 4px 8px rgba(0.4, 0, 2, 0.9)' } }}>
        <CardMedia
          component='img'
          height='140'
          image={image} 
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            <p className='font-serif text-4xl ml-16'>{title}</p>
          </Typography>
          <Typography variant='body2' color='text.secondary' style={{ fontSize: '18px', color: '#333' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {githubUrl && (
            <Button size='small' href={githubUrl} target='_blank' rel='noopener noreferrer'>
              Go to GitHub
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default Cardme;







// To make a Intro card at a later stage
    {/* <Card>
        <Box sx={{ p: 2, display: 'flex' }}>
        <Avatar variant="rounded" src="../assets/MeCard.jpeg" />
        <Stack spacing={0.5}>
            <Typography fontWeight="bold">Devanshu Dhyani</Typography>
            <Typography variant="body2" color="text.secondary">
            <LocationOn sx={{color: grey[500]}} /> Dehradun, UK, India
            </Typography>
        </Stack>
        <IconButton size="small">
            <Edit fontSize="small" />
        </IconButton>
        </Box>
        <Divider />
        <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
        <Chip
            label={active ? 'Active account' : 'Inactive account'}
            color={active ? 'success' : 'default'}
            size="small"
        />
        <Switch />
        </Stack>
    </Card> */}
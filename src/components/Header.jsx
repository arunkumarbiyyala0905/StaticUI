import { Box, IconButton, Button, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function LandingScreenHeader() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      borderBottom: '1px solid #D2D2D2',
      background: '#fff',
      width:'82.5vw',
      height:'8.16vh'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="outlined"
          endIcon={<ShareIcon/>}
          sx={{
            borderColor: '#F8BBD0',
            color: '#fff',
            background:  '#FD9AAD',
            borderRadius: 20,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Share
        </Button>
        <IconButton>
          <AccountCircleIcon sx={{ fontSize: 32, color: '#757575' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export function ChattingScreenHeader() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #D2D2D2',
      background: '#fff',
      width: '82.5vw',
      height: '8.16vh'
    }}>
      <Typography variant="h6"  sx={{
    color: '#C8102E',
    fontWeight: 500,
    paddingLeft: 4,
    height: '24px',
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center'
  }}>
        IC Attainment
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="outlined"
          endIcon={<ShareIcon />}
          sx={{
           // borderColor: '#F8BBD0',
            border: '1px solid var(--Pr, #C5203F)',
            color: '#c5302F',//border: 1px solid var(--Pr, #C5203F)
            background:  '#fff',//background:  '#FD9AAD'
            borderRadius: 20,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Share
        </Button>
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          sx={{
            background: '#c5302F',
            color: '#fff',
            borderRadius: 20,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Export
        </Button>
        <IconButton sx={{ p: 0 }}>
          <AccountCircleIcon sx={{ fontSize: 36, color: '#757575' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

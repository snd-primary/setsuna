import AppBar from '@mui/material/AppBar';
import Image from 'next/image'
import Link from 'next/link'
import Box, { BoxProps } from '@mui/material/Box';

function Item(props: BoxProps) {
  const { sx, ...other} = props;
  return (
    <Box 
      sx={{
        pr: 1,
        pl: 1,
        backgroundColor: 'secoundary.main',
        ...sx,
      }}
      {...other}
    />
  )
}

const Header = () => {
  return (
    <Box sx={{ 
      flexGrow: 1,      
    }}>
      <AppBar position="static" sx={{ 
        backgroundColor: 'background.default'
      }}>
        <Box sx= {{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
         <Image src="/logo/setsuna-logo-typo.svg" width={192} height={63}/>
         <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pr: 0.1,
              pl: 0.1,
              m: 1,
              bgcolor: 'secoundary.main',
              borderRadius: 1,
            }}
          >
            <Item>
              <Image src="/icons/twitter-logo.svg" width={35} height={35}/>
            </Item>
            <Item>
              <Image src="/icons/contact-icon.svg" width={35} height={35}/>
            </Item>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header



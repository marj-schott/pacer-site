import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import HomeIcon from '@mui/icons-material/Home'
import TourIcon from '@mui/icons-material/Tour'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import HistoryIcon from '@mui/icons-material/History'
import WorkIcon from '@mui/icons-material/Work'

export default function Layout() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const location = useLocation()
  const navigate = useNavigate()

  const routes = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Capabilities', path: '/#capabilities', icon: <MiscellaneousServicesIcon /> },
    { label: 'Active Work', path: '/#active-work', icon: <WorkIcon /> },
    { label: 'History', path: '/#history', icon: <HistoryIcon /> },
    { label: 'Virtual Tour', path: '/virtual-tour', icon: <TourIcon /> },
  ]

  const currentTab = routes.findIndex((r) => r.path === location.pathname)

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    const route = routes[newValue]
    if (route) {
      if (route.path === '/#capabilities') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else if (route.path === '/#active-work') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('active-work')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else if (route.path === '/#history') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        navigate(route.path)
      }
    }
  }

  const handleBottomNavChange = (_: any, newValue: number) => {
    const route = routes[newValue]
    if (route) {
      if (route.path === '/#capabilities') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else if (route.path === '/#active-work') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('active-work')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else if (route.path === '/#history') {
        navigate('/')
        setTimeout(() => {
          document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        navigate(route.path)
      }
    }
  }

  return (
    <>
      <CssBaseline />
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 999,
          padding: '1em',
          backgroundColor: '#025589',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '10px';
          e.currentTarget.style.top = '10px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>
      <Box sx={{ 
        minHeight: '100vh', 
        width: '100%',
        background: 'radial-gradient(ellipse at center, #025589 -50%, #ffffff 70%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box sx={{ 
          width: '100%', 
          maxWidth: 1200, 
          pt: 3, 
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}>
          <AppBar position="static" sx={{ bgcolor: '#025589', borderRadius: 15, width: '100%' }} component="nav" aria-label="Main navigation">
            <Toolbar>
            <Typography 
              variant="h6" 
              component="button"
              sx={{ 
                flexGrow: 1, 
                cursor: 'pointer', 
                fontSize: '1.5rem', 
                fontWeight: 600,
                background: 'none',
                border: 'none',
                color: 'inherit',
                textAlign: 'left',
                padding: 0,
                '&:focus-visible': {
                  outline: '2px solid white',
                  outlineOffset: '4px',
                  borderRadius: '4px'
                }
              }} 
              noWrap
              onClick={() => navigate('/')}
              aria-label="PACER Home"
            >
              PACER
            </Typography>

            {/* Tabs on md+ */}
            {!isMobile && (
              <Tabs 
                value={currentTab >= 0 ? currentTab : false} 
                onChange={handleTabChange} 
                textColor="inherit" 
                TabIndicatorProps={{
                  style: { height: 4, backgroundColor: '#d3a133' }
                }}
                aria-label="Main navigation tabs"
              >
                {routes.map((r) => (
                  <Tab 
                    key={r.path} 
                    icon={r.icon} 
                    label={r.label} 
                    aria-label={`Navigate to ${r.label}`}
                  />
                ))}
              </Tabs>
            )}
          </Toolbar>
        </AppBar>

        {/* Main content (centered) */}
        <Box
          component="main"
          id="main-content"
          role="main"
          aria-label="Main content"
          sx={{
            flexGrow: 1,
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Outlet />
          </Box>
        </Box>

        {/* Footer */}
        <Box component="footer" role="contentinfo" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', width: '100%' }}>
          <Typography variant="body2" color="text.secondary">
            The National Laboratory of the Rockies is a national laboratory of the <a href="https://www.energy.gov" target="_blank" rel="noopener noreferrer" aria-label="U.S. Department of Energy - opens in new window">U.S. Department of Energy</a>, <a href="https://www.energy.gov/cmei/office-critical-minerals-and-energy-innovation" target="_blank" rel="noopener noreferrer" aria-label="Office of Critical Minerals and Energy Innovation - opens in new window">Office of Critical Minerals and Energy Innovation</a>, operated under Contract No. DE-AC36-08GO28308
          </Typography>
        </Box>

        {/* Bottom navigation on mobile */}
        {isMobile && (
          <BottomNavigation 
            showLabels 
            value={currentTab >= 0 ? currentTab : -1} 
            onChange={handleBottomNavChange}
            component="nav"
            aria-label="Mobile navigation"
          >
            {routes.map((r) => (
              <BottomNavigationAction 
                key={r.path} 
                label={r.label} 
                icon={r.icon} 
                aria-label={`Navigate to ${r.label}`}
              />
            ))}
          </BottomNavigation>
        )}
        </Box>
      </Box>
    </>
  )
}

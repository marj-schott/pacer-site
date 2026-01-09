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
import InfoIcon from '@mui/icons-material/Info'

export default function Layout() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const location = useLocation()
  const navigate = useNavigate()

  const routes = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Capabilities', path: '/#capabilities', icon: <InfoIcon /> },
    { label: 'Active Work', path: '/#active-work', icon: <InfoIcon /> },
    { label: 'History', path: '/#history', icon: <InfoIcon /> },
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
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      pt: 3, 
      px: 2,
      background: 'radial-gradient(ellipse at center, #025589 -50%, #ffffff 80%)'
    }}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: '#025589', borderRadius: 15, width: '100%', maxWidth: 1200 }}>
        <Toolbar>
          <Typography 
            variant="h6" 
            sx={{ flexGrow: 1, cursor: 'pointer', fontSize: '1.5rem', fontWeight: 600 }} 
            noWrap
            onClick={() => navigate('/')}
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
            >
              {routes.map((r) => (
                <Tab key={r.path} icon={r.icon} label={r.label} />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      {/* Main content (centered) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Outlet />
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', width: '100%', maxWidth: 1200 }}>
        <Typography variant="body2" color="text.secondary">The National Laboratory of the Rockies is a national laboratory of the <a href="https://www.energy.gov">U.S. Department of Energy</a>, <a href="https://www.energy.gov/office-critical-minerals-and-energy-innovation">Office of Critical Minerals and Energy Innovation</a>, operated under Contract No. DE-AC36-08GO28308</Typography>
      </Box>

      {/* Bottom navigation on mobile */}
      {isMobile && (
        <BottomNavigation showLabels value={currentTab >= 0 ? currentTab : -1} onChange={handleBottomNavChange}>
          {routes.map((r) => (
            <BottomNavigationAction key={r.path} label={r.label} icon={r.icon} />
          ))}
        </BottomNavigation>
      )}
    </Box>
  )
}

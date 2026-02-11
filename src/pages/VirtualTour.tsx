import { Container, Typography, Box, Tabs, Tab } from '@mui/material'
import { useState } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`virtual-tour-tabpanel-${index}`}
      aria-labelledby={`virtual-tour-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default function VirtualTour() {
  const [value, setValue] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Virtual Tour
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 3 }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="virtual tour tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Overview" id="virtual-tour-tab-0" aria-controls="virtual-tour-tabpanel-0" />
            <Tab label="Lab Setup" id="virtual-tour-tab-1" aria-controls="virtual-tour-tabpanel-1" />
            <Tab label="Hardware" id="virtual-tour-tab-2" aria-controls="virtual-tour-tabpanel-2" />
            <Tab label="Software" id="virtual-tour-tab-3" aria-controls="virtual-tour-tabpanel-3" />
            <Tab label="Projects" id="virtual-tour-tab-4" aria-controls="virtual-tour-tabpanel-4" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the PACER virtual tour. Explore our facility, capabilities, and research through these interactive tabs.
          </Typography>
  
          <Box sx={{ 
            mt: 2, 
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            border: '0px solid',
            borderColor: 'divider',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/pacer-site/images/controller.png" 
              alt="PACER controller hardware setup showing physical control equipment, communication interfaces, and connection points for building automation systems" 
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }} 
            />
          
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            mt: 3 
          }}>
            <Box sx={{ 
              flex: 1,
              bgcolor: 'background.paper',
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <Typography variant="h6" gutterBottom>
                Software
              </Typography>
              <Typography variant="body1">
                <Typography variant="body1" paragraph>
                <ul>
                  <li>Virtual building web service</li>
                  <li>Automated workflows to source buildings from BuildStock, URBANopt, Modelica, etc</li>
                  <li>DevOps&mdash;cloud deployment resources</li>
                  <li>Operational technology interfaces (eg BACnet, OpenADR) so virtual buildings communicate like real ones</li>
                </ul>
              </Typography>
              </Typography>
            </Box>

            <Box sx={{ 
              flex: 1,
              bgcolor: 'background.paper',
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <Typography variant="h6" gutterBottom>
                Hardware
              </Typography>
              <Typography variant="body1">
                 <ul>
                  <li>Data and communication infrastructure</li>
                  <li>Custom electronics: bench controllers connect real control systems to simulation</li>
                </ul>
              </Typography>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h5" gutterBottom>
            Lab Setup
          </Typography>
          <Typography variant="body1" paragraph>
            Explore the physical layout and configuration of our laboratory space.
          </Typography>
          <Box sx={{ 
            mt: 2, 
            // bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">
              <img 
              src="/pacer-site/images/graphic-aries.png" 
              alt="Network architecture diagram showing ARIES platform connected to PACER through the Advanced Research on Integrated Energy Systems (ARES) interface, illustrating data flow and system integration" 
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block'
              }} 
            />
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h5" gutterBottom>
            Hardware
          </Typography>
          <Typography variant="body1" paragraph>
            View our hardware-in-the-loop systems and control equipment.
          </Typography>
          <Box sx={{ 
            mt: 2, 
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">
              [Hardware image placeholder]
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h5" gutterBottom>
            Software
          </Typography>
          <Typography variant="body1" paragraph>
            Discover the software stack and virtual building simulation capabilities.
          </Typography>
          <Box sx={{ 
            mt: 2, 
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">
              [Software image placeholder]
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h5" gutterBottom>
            Experiments
          </Typography>
          <Typography variant="body1" paragraph>
            See examples of research experiments and testing scenarios conducted in PACER.
          </Typography>
          <Box sx={{ 
            mt: 2, 
            bgcolor: 'background.paper',
            p: 2,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">
              [Experiments image placeholder]
            </Typography>
          </Box>
        </TabPanel>
      </Box>
    </Container>
  )
}

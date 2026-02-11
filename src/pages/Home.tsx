import { Container, Typography, Box, Button, Card, CardContent, CardActions, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import BoltIcon from '@mui/icons-material/Bolt'
import SecurityIcon from '@mui/icons-material/Security'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import CastForEducation from '@mui/icons-material/CastForEducation'
import HostIcon from '@mui/icons-material/Dns'

export default function Home() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)
  const cards = [
    { 
      title: 'Controls', 
      icon: <TuneIcon sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'PACER interfaces with a diverse range of energy control systems, extending from grid operational technology (OT) to commercial HVAC and residential end devices.',
      detailImage: '/pacer-site/images/controls2.png',
      detailImageAlt: 'Diagram showing PACER helping to bridge the gap between grid operational technology, commercial HVAC, and residential end devices by providing a versatile testing platform for control strategies across various energy systems'
    },
    { 
      title: 'Cyber-Security', 
      icon: <SecurityIcon sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'Closed-loop emulation environments to develop and demonstrate novel technologies that improve cyber security posture for hardwired and cloud-connected devices.',
      detailImage: '/pacer-site/images/cyber-76097.png',
      detailImageAlt: 'Cybersecurity testing infrastructure showing network security layers and threat detection systems'
    },
    { 
      title: 'DERMS and Microgrid', 
      icon: <BoltIcon sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'Interfaces with commercial-off-the-shelf DERMS for lab or field testing of microgrid control, demand response, and grid integration scenarios. ',
      detailImage: '/pacer-site/images/illustration_military_base_microgrid.png',
      detailImageAlt: 'Illustration of a military base microgrid showing distributed energy resources and control systems'
    },
    { 
      title: 'Thermal Energy Systems', 
      icon: <DeviceThermostatIcon sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'Testing aTesting and validation of thermal energy systems including district systems, advanced HVAC, and thermal storage solutions. ',
      detailImage: '/pacer-site/images/themal-systems.png',
      detailImageAlt: 'Thermal energy systems diagram showing data centers, server farms, hospital, and other buildings connected to district energy systems, advanced HVAC, and thermal storage solutions.'
    },
    { 
      title: 'Data Centers', 
      icon: <HostIcon sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'PACER accelerates the deployment of emerging data center technologies by providing a high-fidelity emulation environment to rigorously test and verify cooling strategies against the Controls Validation Protocol (CVP) before they touch live critical infrastructure. ',
      detailImage: '/pacer-site/images/101315.jpg',
      detailImageAlt: 'a blade server, a component of the supercomputer, in the High-Performance Computing (HPC) Data Center at the Energy Systems Integration Facility (ESIF) at NLR. The HPC Data Center is designed to support large-scale energy research and development projects. It is highly energy efficient, utilizing innovative cooling technology and waste heat recovery systems. (Photo by Joe DelNero / NLR 101315)'
    },
    { 
      title: 'Workforce Training', 
      icon: <CastForEducation sx={{ fontSize: 60 }} color="primary" aria-hidden="true" />,
      detailContent: 'Hands-on workforce training programs for cyber security, buildings automation, and grid-interactive systems.  ',
      detailImage: '/pacer-site/images/iconnect.png',
      detailImageAlt: 'Training session showing participants learning building automation and grid-interactive systems'
    },
  ]

  const handleOpenDialog = (index: number) => {
    setOpenDialog(index)
  }

  const handleCloseDialog = () => {
    setOpenDialog(null)
  }
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', gap: 0, mb: 4 }}>
          <Box
            sx={{
              background: '#025589',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: '0px solid #58a4b0',
              p: 4,
              position: 'relative',
              flex: 1,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Platform for Advanced Controls Evaluation and Research (PACER) 
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom>
                What is PACER?
              </Typography>
              <Typography variant="body1" paragraph>
                PACER is a suitcase size, collection of device and supervisory commercial off-the-shelf control equipment and custom hardware used to emulate an entire facility’s control environment in a lab or in the field. 
              </Typography>
            
              <Typography variant="h3" component="h2" gutterBottom>
                <br></br>
                Why is PACER important?
              
              </Typography>
              <Typography variant="body1" paragraph>
               It fills a gap and is a gymnasium where AI can interact and train itself with real systems leading to rapid innovation. Applications are broad: cyber, resilience, enabling more power, workforce training and more!
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: 0,
              position: 'relative',
              flex: 1,
              bgcolor: '#025589',
              border: '0px solid',
              borderColor: 'divider',
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img 
              src="/pacer-site/images/banner.png" 
              alt="PACER system architecture diagram showing controller hardware connecting to virtual buildings with control systems for hot water, refrigeration, HVAC, and lighting. Compatible software includes ComStock, ResStock, URBANopt, OpenStudio, EnergyPlus, BOPTEST, Alfalfa, and Modelica." 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Box>

        <Box sx={{ 
          mt: 4, 
          mb: 4,
          bgcolor: '#2b303a',
          p: 3,
          borderRadius: 2, 
          boxShadow: 1,
          border: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            PACER is operated and extended by multidisciplinary teams of engineers, researchers, and technicians who design experiments, maintain the lab stack, interpret results, and translate findings into deployable control strategies, making PACER a combination of software, physical testbed, and skilled human expertise rather than a standalone code repository, testbed, or one-off project.
          </Typography>
        </Box>

        <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }} id="capabilities">
         Capabilities
        </Typography>

        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, alignItems: 'stretch' }}>
          {cards.map((card, i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Card 
                elevation={3} 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: 140, 
                  width: '100%',
                  cursor: 'pointer',
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  },
                  '&:focus-visible': {
                    outline: '3px solid #025589',
                    outlineOffset: '2px'
                  }
                }}
                onClick={() => handleOpenDialog(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenDialog(i);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${card.title}`}
              >
                <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {card.icon}
                    <Typography variant="h3" component="h3" sx={{ whiteSpace: 'normal', wordBreak: 'break-word', m: 0 }}>{card.title}</Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDialog(i);
                    }}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Dialog for card details */}
        <Dialog 
          open={openDialog !== null} 
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          aria-labelledby="capability-dialog-title"
          aria-describedby="capability-dialog-description"
        >
          {openDialog !== null && (
            <>
              <DialogTitle id="capability-dialog-title">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {cards[openDialog].icon}
                  {cards[openDialog].title}
                </Box>
              </DialogTitle>
              <DialogContent>
                <Typography variant="body1" paragraph id="capability-dialog-description">
                  {cards[openDialog].detailContent}
                </Typography>
                {cards[openDialog].detailImage && (
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <img 
                      src={cards[openDialog].detailImage} 
                      alt={cards[openDialog].detailImageAlt || cards[openDialog].title}
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        borderRadius: '8px'
                      }} 
                    />
                  </Box>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} aria-label="Close dialog">Close</Button>
              </DialogActions>
            </>
          )}
        </Dialog>

             <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }} id="active-work">
       Active Work
        </Typography>
        <Box 
          component="section"
          aria-labelledby="active-work"
          sx={{ 
            bgcolor: 'white', 
            borderRadius: 2, 
            p: 3, 
            boxShadow: 1,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
            <Typography variant="body1" paragraph>
                <ul>
                  <li><a href='https://github.com/NREL/alfalfa' target="_blank" rel="noopener noreferrer" aria-label="Alfalfa Repository on GitHub - opens in new window">Alfalfa Repository on GitHub</a> </li>
                  <li><a href='https://github.com/NREL/alfalfa/wiki/Related-Repos' target="_blank" rel="noopener noreferrer" aria-label="Alfalfa Wiki - opens in new window">Alfalfa Wiki</a> </li>
                  <li><a href='https://github.com/NREL/boptest-service' target="_blank" rel="noopener noreferrer" aria-label="BOPTEST Service on GitHub - opens in new window">BOPTEST Service</a></li>
                </ul>
              </Typography>
        </Box>


             <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }} id="history">
       History
        </Typography>
        <Box sx={{ 
          width: '100%', 
          mt: 2, 
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          borderRadius: 2,
          overflow: 'hidden'
        }}>
          <img 
            src="/pacer-site/images/timeline.png" 
            alt="PACER historical timeline from 2017 to 2026 showing evolution from software startup to comprehensive testing facility. Major milestones include: 2017 Software Started: idea initiated from the Wells Fargo Innovation Incubator (IN2) program;2018 Intro Physical Laboratory: NLR’s commercial buildings research infrastructure lab at ESIF; 2019-2021 First Cybersecurity Project: automated threat/fault detection; 2022 Start to Scale: real-time data connections made to load banks at Flat Irons Campus; 2022 New Capability: compatible with industry communication standards (Modbus, BACnet, OpenADR); 2023 Large Research Projects: Field validation of DOD islanded microgrid with industry partners S&C Electric; 2023-2024 NLR Research Infrastructure Build Out: DERMS installed, compatible with several NLR testbeds; 2023-2026 Thermal Energy Systems: design phase for geothermal heating and cooling lab infrastructure; 2024-2025 Large Research Projects: DOE CESER funded emulation effort focused on grid impacts of cyberattacks on behind the meter energy equipment; 2025 Evolves to Modular Ecosystem of Capabilities: ‘HVAC in a Box’ developed to support controls verification procedure (CVP) testing for several industry partners - Carrier, Lennox, Trane; 2026 New Capability: Testbed for Data Center controls environment"
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </Box>


        <Box sx={{ mt: 3 }}>
          <Button variant="contained" component={Link} to="/virtual-tour">
            Take the Virtual Tour
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

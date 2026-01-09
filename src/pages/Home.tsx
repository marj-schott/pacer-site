import { Container, Typography, Box, Button, Card, CardContent, CardActions } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import BoltIcon from '@mui/icons-material/Bolt'
import SecurityIcon from '@mui/icons-material/Security'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import CastForEducation from '@mui/icons-material/CastForEducation'

export default function Home() {
  const cards = [
    { title: 'Controls', description: 'Text here.', icon: <TuneIcon fontSize="large" color="primary" /> },
    { title: 'Cybersecurity', description: 'Text here.', icon: <SecurityIcon fontSize="large" color="primary" /> },
    { title: 'DERMS and Microgrid', description: 'Text here.', icon: <BoltIcon fontSize="large" color="primary" /> },
    { title: 'Thermal Energy Systems', description: 'Text here.', icon: <DeviceThermostatIcon fontSize="large" color="primary" /> },
    { title: 'Cybersecurity', description: 'Text Here', icon: <SecurityIcon fontSize="large" color="primary" /> },
    { title: 'Workforce Training', description: 'Text here', icon: <CastForEducation fontSize="large" color="primary" /> },
  ]
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
              borderRight: '4px solid #0c7c59',
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
                backgroundColor: 'e1e1e1',
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
                Software
              </Typography>
              <Typography variant="body1" paragraph>
                <ul>
                  <li>Virtual building web service</li>
                  <li>Automated workflows to source buildings from BuildStock, URBANopt, Modelica, etc</li>
                  <li>DevOps&mdash;cloud deployment resources</li>
                  <li>Operational technology interfaces (eg BACnet, OpenADR) so virtual buildings communicate like real ones</li>
                </ul>
              </Typography>

              <Typography variant="h3" component="h2" gutterBottom>
                Hardware-in-the-Loop
              </Typography>
              <Typography variant="body1" paragraph>
                <ul>
                  <li>Data and communication infrastructure</li>
                  <li>Custom electronics: bench controllers connect real control systems to simulation</li>
                </ul>
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: 0,
              position: 'relative',
              flex: 1,
              bgcolor: 'background.paper',
              border: '1px solid',
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
              alt="Controller hardware connected to virtual buildings with controls for various systems like hot water, refrigeratgion, HVAC, and lighting. Then a list of software that works with PACER including ComStock, ResStock, UBANopt, OpenStudio, EnergyPlus, BOPTEST, Alfalfa, and Modelica." 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Box>

        <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }} id="capabilities">
         Capabilities
        </Typography>

        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2, alignItems: 'stretch' }}>
          {cards.map((card, i) => (
            <Box key={i} sx={{ display: 'flex' }}>
              <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: 260, width: '100%' }}>
                <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {card.icon}
                    <Typography variant="h3" sx={{ whiteSpace: 'normal', wordBreak: 'break-word', m: 0 }}>{card.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn more</Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

             <Typography variant="h2" component="h2" gutterBottom sx={{ mt: 4 }} id="active-work">
       Active Work
        </Typography>
        <Box sx={{ 
          bgcolor: 'white', 
          borderRadius: 2, 
          p: 3, 
          boxShadow: 1,
          border: '1px solid',
          borderColor: 'divider'
        }}>
            <Typography variant="body1" paragraph>
                <ul>
                  <li><a href='https://github.com/NREL/alfalfa'>Alfalfa Repository on GitHub</a> </li>
                  <li><a href='https://github.com/NREL/alfalfa/wiki/Related-Repos'>Alfalfa Wiki</a> </li>
                  <li><a href='https://github.com/NREL/boptest-service'>BOPTEST Service</a></li>
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
            alt="Historical timeline showing PACER's evolution and key milestones from inception to present. 2017-2018: software start. IN2 Startup incubator (~150k); ​2019: into physical lab. Commercial Building Research Infrastructure HIL capability at NREL/ESIF – RTU coordination focus​2021-2022: first cybersecurity. BUILD-SOS, BTO-funded cybersecurity project​ 2022 : start to scale. LDRD (Connected Community Experimental Twin) project to enable equity/behind-the-meter research for NREL ARIES platform (322k);2022: NREL research infrastructure build out: Building Loads and Controls Emulation ($590k); 2022: new feature. OpenADR support for Residential Cold Climate Heat Pump Challenge; 2022-2025: Dedicated BTO funding ~$150-250k/year; 2023-2024: new feature NREL research infrastructure build out: commissioning DERMS for buildings research ($1.1M);2023-ongoing: Advanced Thermal Test and Emulation Network (ATTEN); 2023-2024: large research projects. DOD/ESTCP OpenADR on islanded microgrid ($1.8M​; 2024-2026: large research projects. CESER-funded emulation effort focused on grid impacts of cyberattacks on behind the meter energy equipment (~$5M); 2025: Evolves to modular and flexible ecosystem of capabilities. support Commercial HVAC Challenge with novel HIL/CHIL capabilities; 2026: ITO $120k to advance industrial load flexibility, data center focus" 
            style={{ 
              width: '100%', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </Box>


        <Box sx={{ mt: 3 }}>
          <Button variant="contained" href="/virtual-tour">
            Take the Virtual Tour
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

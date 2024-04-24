import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme, type SxProps } from '@mui/material/styles';
import './_homeAbout.css';

export default function HomeAbout() {
  //Misc
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';
  const wrapperStyle: SxProps = {
    paddingTop: theme.spacing(5),
    backgroundColor: isDark
      ? theme.palette.background.default
      : theme.palette.grey[200],
  };

  return (
    <Box role="contentinfo" className="about" sx={wrapperStyle}>
      <Typography variant="h2">Acerca de ésta página</Typography>
      <Box className="tech_icons">
        <img
          alt="react"
          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
          loading="lazy"
        />
        <img
          alt="typescript"
          src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"
          loading="lazy"
        />
        <img
          alt="Material-UI"
          src="https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png"
          loading="lazy"
        />
        <img
          alt="Vite"
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png"
          loading="lazy"
        />
        <img
          alt="CSS"
          src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
          loading="lazy"
        />
        <img
          alt="VSz code"
          src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
          loading="lazy"
        />
        <img
          alt="github copilot"
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*oRRpMJ9XqkRnYLhW.png"
          loading="lazy"
        />
        <img
          alt="cloudflare"
          src="https://1000logos.net/wp-content/uploads/2020/09/Cloudflare-logo.png"
          loading="lazy"
        />
      </Box>
      <Typography variant="h6" className="tech">
        Éste portafolio es una muestra de mi trabajo como desarrollador de
        software. Ésta versión (react-static), está construida con las
        tecnologias de la izquierda. El código fuente está disponible en GitHub.
      </Typography>
      <Box className="versions">
        <Typography variant="h6">
          Para seguir practicando diferentes tecnologías y herramientas, he
          decidido hacer varios deploys de ésta página, usando metodologías
          similares, para comparar experiencias.
          <blockquote>
            Al final lo que hace mejor a un ingeniero(a) de software, es la
            experiencia.
          </blockquote>
        </Typography>
        <Typography variant="h6">
          Éste sitio, por default, carga la versión estática de React, todo el
          contenido está escrito directamente en los componentes, en el código.
        </Typography>
      </Box>
      <Box className="versions_icons">
        <img
          alt="react"
          src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
          loading="lazy"
        />
        <img
          alt="solidjs"
          src="https://osawards.com/javascript/pic/2022/SolidJS.png"
          loading="lazy"
        />
        <img
          alt="astro"
          src="https://github.com/marwin1991/profile-technology-icons/assets/54946572/397c0300-2e47-464e-81eb-6e991c9255fc"
          loading="lazy"
        />
        <img
          alt="nextjs"
          src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"
          loading="lazy"
        />
      </Box>
      <Container className="keepReading">
        <Typography variant="body1" textAlign="center" mt={4}>
          Sigue descubriendo las tecnologías que se usarán en los próximos
          deploys y más.
        </Typography>
        <Button variant="text" href="/about-site">
          Seguir leyendo
        </Button>
      </Container>
      <Divider aria-hidden="true">
        <Tooltip title="Sobre esta página">
          <a href="#roadmap" style={{ textDecoration: 'none' }}>
            <Typography variant="h1" id="roadmap">
              🗺️
            </Typography>
          </a>
        </Tooltip>
      </Divider>
    </Box>
  );
}

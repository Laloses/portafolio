import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, type SxProps } from '@mui/material/styles';
import './_homeAbout.css';
import Stack from '@mui/material/Stack';

export default function HomeAbout() {
  //Misc
  const theme = useTheme();

  const isDark = theme.palette.mode === 'dark';
  const wrapperStyle: SxProps = {
    paddingX: theme.spacing(10),
    paddingY: theme.spacing(5),
    backgroundColor: isDark
      ? theme.palette.background.default
      : theme.palette.grey[500],
  };

  return (
    <Box role="section" className="about" sx={wrapperStyle}>
      <Typography variant="h2">Acerca de ésta página</Typography>
      <Box className="tech">
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
        </Box>
        <Typography variant="h5">
          Este portafolio es una muestra de mi trabajo como desarrollador de
          software. Está construido con las siguientes tecnologias, además de
          ocupar Github Copilot y Cloudflare para los despliegues.
          <br /> El código fuente está disponible en GitHub.
        </Typography>
      </Box>
      <Box className="versions">
        <Box className="explication">
          <Typography variant="h5">
            Para seguir practicando diferentes tecnologías y herramientas, he
            decidido hacer varios deploys está página, usando diferentes
            metodologías en diversas tecnologías, para comparar experiencias; al
            final lo que hace mejor a un ingeniero(a) de software, es la
            expericencia.
          </Typography>
          <br />
          <Typography variant="h5">
            Este sitio, por default, carga la versión estática de React, todo el
            contenido esta escrito directamente en los componente, en el código.
          </Typography>
        </Box>
      </Box>
      <br />
      <Container className="roadmap">
        <Typography variant="h2">Roadmap</Typography>
        <Typography variant="h5">
          Las tecnologías que se han usado hasta ahora son:
          <Stack spacing={2} mt={4}>
            <span> 🚧 default: React CSR (Client Side Rendering)</span>
          </Stack>
          <br />
          Las tecnologías que se usarán para los próximos deploys son:
          <Stack spacing={2} mt={4}>
            {/* React */}
            <span> 📅 React SSR (Server Side Rendering)</span>
            <span> 📅 React SSG (Static Site Generation)</span>
            {/* Solid */}
            <span> ⏰ SolidJS CSR (Client Side Rendering)</span>
            <span> 📅 SolidJS SSR (Server Side Rendering)</span>
            <span> 📅 SolidJS SSG (Static Site Generation)</span>
            {/* Astro */}
            <span> ⏰ Astro CSR (Client Side Rendering)</span>
            <span> 📅 Astro SSR (Server Side Rendering)</span>
            <span> 📅 Astro SSG (Static Site Generation)</span>
            {/* NextJS */}
            <span> ⏰ NextJS CSR (Client Side Rendering)</span>
            <span> 📅 NextJS SSR (Server Side Rendering)</span>
            <span> 📅 NextJS SSG (Static Site Generation)</span>
          </Stack>
        </Typography>
      </Container>
      <Container className="keepReading">
        <Typography variant="body1" textAlign="center" mt={4}>
          Sigue descubriendo las tecnologías que se usarán en los próximos
          deploys y más en ésta página.
        </Typography>
        <Button variant="contained" href="/about-site">
          Seguir leyendo
        </Button>
      </Container>
    </Box>
  );
}

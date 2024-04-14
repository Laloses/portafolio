import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './_homeAbout.css';

export default function HomeAbout() {
  return (
    <Box role="section" className="about">
      <Typography variant="h2">Acerca de ésta página</Typography>
      <Typography variant="body1">
        Este portafolio es una muestra de mi trabajo como desarrollador de
        software. Está construido con React, Typescript, Material-UI, Copilot y
        desplegado con Cloudflare (Ésta version). El código fuente está
        disponible en GitHub.
      </Typography>
      <br />
      <Typography variant="body1">
        Éste sitio, por default, carga la versión de estático de React, todos
        los assets están escritos directamente en el "HTML" (JSX para los
        amigos).
      </Typography>
      <br />
      <Typography variant="body1">
        Como práctica, para seguir aprendiendo más sobre diferentes tecnologías
        y herramientas, he decidido hacer varios deploys está página, usando
        diferentes metodologías en diversas tecnologías, para comparar
        experiencias; al final lo que hace mejor a un ingeniero(a) de software,
        es la expericencia.
      </Typography>
      <br />
      <Typography variant="body1">
        Las tecnologías que se han usado hasta ahora son:
        <ul>
          <li> 🚧 default: React CSR (Client Side Rendering)</li>
        </ul>
        Las tecnologías que se usarán para los próximos deploys son:
        <ul>
          {/* React */}
          <li> ⏰ React SSR (Server Side Rendering)</li>
          <li> ⏰ React SSG (Static Site Generation)</li>
          {/* Solid */}
          <li> 📅 SolidJS CSR (Client Side Rendering)</li>
          <li> 📅 SolidJS SSR (Server Side Rendering)</li>
          <li> 📅 SolidJS SSG (Static Site Generation)</li>
          {/* Astro */}
          <li> 📅 Astro CSR (Client Side Rendering)</li>
          <li> 📅 Astro SSR (Server Side Rendering)</li>
          <li> 📅 Astro SSG (Static Site Generation)</li>
          {/* NextJS */}
          <li> 📅 NextJS CSR (Client Side Rendering)</li>
          <li> 📅 NextJS SSR (Server Side Rendering)</li>
          <li> 📅 NextJS SSG (Static Site Generation)</li>
        </ul>
      </Typography>
      <Typography variant="body2">
        Sigue descubriendo las tecnologías que se usarán en los próximos deploys
        y más en ésta página.
        <Button variant="contained" href="/about-site">
          Seguir leyendo
        </Button>
      </Typography>
    </Box>
  );
}

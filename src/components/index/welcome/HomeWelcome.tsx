import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import './_welcome.css';

export default function HomeWelcome() {
  // Misc
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // State
  const years = useMemo(() => new Date().getFullYear() - 2022, []);

  return (
    <>
      <Box className="welcome">
        <Typography variant="h2">Bienvenido a mi Portafolio 😁</Typography>
        <Typography variant="h6">
          Soy un desarrollador web con {years} años de experiencia. Aquí
          encontrarás información sobre mí, mis proyectos, mis habilidades y más
          detalles curiosos.
          <br />
          <br />
          <Typography variant="h6" color={theme.palette.warning.main}>
            <code>
              Esta página esta en construcción, regresa pronto para ver las
              actualizaciones si la información que buscas no está disponible.
            </code>
          </Typography>
        </Typography>
        {/* TODO make a carrusel  */}
        <aside>
          {!isMobile && (
            <img
              height={700}
              alt="rocket"
              src="https://www.acmerocketengine.com/homePageAssets/circle.png"
            />
          )}
        </aside>
        <Divider aria-hidden="true">
          <Tooltip title="Sobre esta página">
            <a href="#aboutWeb" style={{ textDecoration: 'none' }}>
              <Typography variant="h1" id="aboutWeb">
                🚀
              </Typography>
            </a>
          </Tooltip>
        </Divider>
      </Box>
    </>
  );
}

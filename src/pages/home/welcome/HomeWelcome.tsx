import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import type { SxProps } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import './_welcome.css';
import Tooltip from '@mui/material/Tooltip';

export default function HomeWelcome() {
  // Misc
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // State
  const years = useMemo(() => new Date().getFullYear() - 2022, []);

  const isDark = theme.palette.mode === 'dark';
  const backgroundStyle: SxProps = {
    backgroundColor: isDark ? theme.palette.grey[700] : theme.palette.grey[200],
  };

  return (
    <>
      <Box role="section" className="welcome" sx={backgroundStyle}>
        <Typography variant="h2">Bienvenido 😁</Typography>
        <Typography variant="h4">
          Soy un desarrollador web con {years} años de experiencia. <br />
          <br /> Aquí encontrarás información sobre mí, mis proyectos, mis
          habilidades y más detalles curiosos.
        </Typography>
        <Typography variant="h4" color={theme.palette.warning.main}>
          <code>
            Esta página esta en construcción, regresa pronto para ver las
            actualizaciones si la información que buscas no está disponible.
          </code>
        </Typography>
        <aside>
          {!isMobile && (
            <img
              height={700}
              alt="rocket"
              src="https://www.acmerocketengine.com/homePageAssets/circle.png"
            />
          )}
        </aside>
      </Box>
      <Divider sx={backgroundStyle} aria-hidden="true">
        <Tooltip title="Sobre esta página">
          <a
            role="a"
            href="#aboutWeb"
            aria-hidden="true"
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="h1" id="aboutWeb">
              🚀
            </Typography>
          </a>
        </Tooltip>
      </Divider>
    </>
  );
}

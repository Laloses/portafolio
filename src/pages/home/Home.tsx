import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import './_home.css';

export default function Home() {
  // Misc
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // State
  const years = useMemo(() => new Date().getFullYear() - 2022, []);

  return (
    <Box className="home">
      <Typography variant="h2">Bienvenido 😁</Typography>
      <Typography variant="h4">
        Soy un desarrollador web con {years} años de experiencia. <br />
        <br /> Aquí encontrarás información sobre mí, mis proyectos, mis
        habilidades y más detalles curiosos.
      </Typography>
      <Typography variant="h4" color={'GrayText'}>
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
  );
}

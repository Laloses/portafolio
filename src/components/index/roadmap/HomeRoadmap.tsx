import { Link, type SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import './_homeRoadmap.css';

export default function HomeRoadmap() {
  const isDark = useTheme().palette.mode === 'dark';
  const opacity: SxProps = { '&::before': { opacity: isDark ? 0.2 : 0.5 } };

  const isReactPage = window.location.pathname.includes('react-static');

  return (
    <Box className="roadmap" sx={opacity}>
      <div className="center">
        <Typography variant="h2">Roadmap</Typography>
        <br />
        <div className="float-left">
          <Typography variant="body1">
            Equivalencia de iconos:
            <br />
            <br />
            <Stack>
              <span>✅ Completado</span>
              <span>🚧 En construcción</span>
              <span>⏰ Próximos desarrollos</span>
              <span>📅 Contemplado para después</span>
            </Stack>
          </Typography>
        </div>
        <Typography variant="h6">
          <Stack spacing={2} mt={4}>
            {/* React */}
            <span>
              🚧
              <Link
                href="https://github.com/Laloses/portafolio"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                {isReactPage ? 'actual' : ''} React CSR (Client Side Rendering)
              </Link>
            </span>
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
      </div>
    </Box>
  );
}

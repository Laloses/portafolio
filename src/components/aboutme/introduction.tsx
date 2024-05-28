import { Fade, Typography } from '@mui/material';
import { useState } from 'react';

export function AboutMeIntroduction() {
  const [time] = useState(new Date().getFullYear() - 2022);

  return (
    <Fade in timeout={500}>
      <section>
        <Typography variant="h2">¿Así que quieres saber más de mi?</Typography>
        <div className="flex">
          <img
            src="http://www.clker.com/cliparts/Z/0/b/A/E/u/who-md.png"
            alt="Degree"
            height="200"
          />
          <Typography variant="body1">
            &emsp;Bien, te contaré un poco sobre mi. Actualmente soy un
            desarrollador web, me gradué hace {time} años de una universidad
            pública de México. Mi facultad, Ciencias de la Computación.
            <br />
            <br />
            &emsp; Como un buen ingeniero, tengo un nato instinto por aprender
            cosas nuevas, ser curioso en todo e intentar ver cómo funcionan las
            cosas.
            <br />
            <br />
            &emsp; ¿Nada nuevo verdad? Pero, ¿qué me hace diferente? El
            conocimiento que he adquirido a lo largo de mi vida, mi experiencia
            personal ha forjado mi carácter y mi forma de ver la vida.
          </Typography>
        </div>
      </section>
    </Fade>
  );
}

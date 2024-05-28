import { Fade, Typography } from '@mui/material';
import useIsElementVisible from '../../hooks/useIsElementVisible';

export function AboutMeGrowingUp() {
  const { elementRef: universityRef, isVisible: isVisibleUniversity } =
    useIsElementVisible({});
  return (
    <>
      <Fade in timeout={1000}>
        <section>
          <Typography variant="h2">Infancia</Typography>
          <div className="flex">
            <Typography variant="body1">
              &emsp; Nací en una pueblo pequeño, en una zona alejada de grandes
              ciudades, pero mis padres tomaron la decisión de mudarse para que
              tuvieran mejores oportunidades de trabajo.
              <br />
              <br />
              &emsp; Desde pequeño tuve la mente de ingeniero, la curiosidad de
              saber como funcionaban los juguetes que mis padres me compraban.
              Aunque mi educación no fué especial ni diferente a la de otro
              niño, yo diría que fue bastante normal, siempre en escuela
              pública. Aunque no era el mejor estudiante, tampoco era de los
              peores.
              <br />
              <br />
              &emsp; Mi infancia fue bastante tranquila, siempre con la compañía
              de mi familia. Demasiado tranquilo yo creo, pero eso no me impidió
              tener una infancia feliz. Muy hogareño, siempre me gustó estar en
              casa, jugando con mis juguetes o viendo la televisión. No tenía
              tanto interés en salir a jugar con otros niños, porque ellos ya
              tenían conocimiento de andar en la calle y yo no. Las pocas veces
              que salía, terminaba perdiendo cosas y regresaba a casa
              desconsolado.
            </Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7441/7441181.png"
              alt="Foto de mi infancia"
              height="300"
            />
          </div>
        </section>
      </Fade>
      <Fade in timeout={1000}>
        <section>
          <Typography variant="h2">Adolescencia</Typography>
          <div className="flex">
            <img
              src="https://www.aarteez.com/wp-content/uploads/2021/03/Right-Career-Decision-1014x1024.png"
              alt="Foto de mi adolescencia"
              height="300"
            />
            <Typography variant="body1">
              &emsp; En nivel medio superior fue cuando entendí que lo mio era
              la tecnología y la programación. Se me hacía muy fácil entender
              los conceptos y entregar los ejercicios que nos dejaban en la
              clase de informática, la cuál yo mismo elegí.
              <br />
              <br />
              &emsp; Al llegar a la universidad, tenía dos opciones en la mente
              para estudiar: Comunicación o Electrónica. La primera, seguramente
              no se lo esperaban, ustedes ni mis conocidos, ya que seguía siendo
              un poco cerrado (yo creo que po no socializar tanto en mi
              infancia). Pero la contemplaba como opción porque tenía un canal
              de YouTube y me gustaba hacer videos en ese entonces. La segunda
              opción, Electrónica, porque tenía la idea de que era lo indicado
              para entender cómo funcionaban los dispositivos electrónicos que
              tanto usaba.
              <br />
              <br />
              &emsp; Al final, analicé bien las ofertas académicas de ambas
              carreras y con los puntajes del año anterior (que obtuve gracias a
              un conocido) me di cuenta que podría asegurar un lugar si entraba
              a la carrera de Tecnologías de la Información, ya que apenas tenia
              2 años de haberse creado y no era tan demandada.
            </Typography>
          </div>
        </section>
      </Fade>
      <Fade in={isVisibleUniversity} timeout={1000}>
        <section ref={universityRef}>
          <Typography variant="h2">Universidad</Typography>
          <div className="flex">
            <Typography variant="body1">
              &emsp; No tenía conocimiento de programación antes de entrar a la
              universidad, pero si había tenido cursos de mantenimiento de
              computadoras y redes en la preparatoria. También un poco de
              creación de páginas web con HTML y CSS, ni siquiera con
              JavaScript.
              <br />
              <br />
              &emsp; Noté que a muchos compañeros les costaba trabajo entender
              los conceptos de los primeros cursos de programación y eso me
              iluminó, me di cuenta que tenía facilidad para entender los
              conceptos y aplicarlos, estaba en el lugar correcto. Quiero
              agregar que también habían compañeros que ya tenían conocimientos
              previos y se les hacía mucho más fácil, unos hacían más de lo que
              se les pedía y otros se aburrían y optaban por no hacer nada. Este
              ultimo caso es el peor, ya que ellos fueron conformistas a
              diferencia de los estudiantes que optaban por dejar la universidad
              ya que les costaba entender porque no tenían una idea previa de
              los sistemas informáticos.
              <br />
              <br />
              &emsp; Para no hacer de esto un blog, les resumo que sí tuve
              buenos y malos maestros, cursos que no entendía porqué estaban en
              la carrera y otras que me costaron de terminar. Lo importante es
              que dieron las bases para pensar de diferente forma a los
              problemas que tuviera. Como no tenía conocimientos previos, acepté
              todo lo que me enseñaban como si fuera lo mejor. En ese momento yo
              también era conformista, ya que no buscaba por la mejor forma de
              hacer algo, solo la forma en que me lo enseñaban. Pero eso cambió
              cuando me gradué y empecé a trabajar.
            </Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7505/7505143.png"
              alt="Foto de mi universidad"
              height="300"
            />
          </div>
        </section>
      </Fade>
    </>
  );
}

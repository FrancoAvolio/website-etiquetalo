import SingleCard from './SingleCard';
import box from '../../assets/box.svg';
import textiles from '../../assets/textiles.svg';
import plasticas from '../../assets/plasticas.svg';
import lavables from '../../assets/lavables.svg';
import economicas from '../../assets/economicas.svg';
import durables from '../../assets/durables.svg';
import transparentes from '../../assets/transparentes.svg';
import frio from '../../assets/frio.svg';

const Cards = () => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4">
      <SingleCard  list={'VOID/ De Recorte'} list2= {'Ribbon de Resina'}  title={'Seguridad'} image={box} />
      <SingleCard  list={'Poliamida'} list2= {'Fasco'} title={'Textiles'} image={textiles} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Plasticas'} image={plasticas} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Lavables'} image={lavables} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Economicas'} image={economicas} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Durables'} image={durables} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Transparentes'} image={transparentes} />
      <SingleCard  list={'VOID/ De Recorte'} list2= {''} title={'Frio'} image={frio} />
    </div>
  );
};

export default Cards;

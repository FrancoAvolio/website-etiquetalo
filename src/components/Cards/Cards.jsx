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
    <div className="grid gap-4 grid-cols-4 p-16">
      <SingleCard title={'Seguridad'} image={box} />
      <SingleCard title={'Textiles'} image={textiles} />
      <SingleCard title={'Plasticas'} image={plasticas} />
      <SingleCard title={'Lavables'} image={lavables} />
      <SingleCard title={'Economicas'} image={economicas} />
      <SingleCard title={'Durables'} image={durables} />
      <SingleCard title={'Transparentes'} image={transparentes} />
      <SingleCard title={'Frio'} image={frio} />
    </div>
  );
};

export default Cards;

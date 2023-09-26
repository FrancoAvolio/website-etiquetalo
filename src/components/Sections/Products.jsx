import Cards from '../Cards/Cards';

const Products = () => {
  return (
    <section className="w-full h-256 bg-gray-200 -mt-2">
      <div className="text-center text-blue-950 text-[40px] font-bold font-['Roboto', sans_serif] mt-2">
        Nuestros Productos
        <div className="my-[1px] border-b-[3px] border-blue-400 w-[295px] mx-auto"></div>
        <div className="-mt-0.5 border-b-[3px] border-gray-400 w-[295px] mx-auto"></div>
        <p className="mt-4 mb-6 text-cyan-900 text-lg font-normal font-['Roboto, sans_serif']">
          Dependiendo del material de la etiqueta y del ribbon, ofrecemos
          productos en <br /> distintas calidades, segun tus necesidades y
          aplicaciones:
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Cards />
      </div>
    </section>
  );
};

export default Products;

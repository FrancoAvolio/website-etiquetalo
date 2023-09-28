import imageUrl from '../../assets/ruler.svg';
import imageUrl2 from '../../assets/etiqueta.svg';
import imageUrl3 from '../../assets/rulermeasure.svg';
import imageUrl4 from '../../assets/change.svg';
import imageUrl5 from '../../assets/tear.svg';

const Section = () => {
  return (
    <section className="-mt-48 w-full flex justify-center bg-gray-200">
      <div className="w-[420px] h-[52px] top-[994px] absolute z-20 text-center text-blue-950 text-[40px] font-bold font-['Roboto', sans_serif] mt-2">
        {/* le agregué el z-10  */}
        Requisitos
        <div className="my-[1px] border-b-[3px] border-blue-400 w-[164px] mx-auto"></div>
      </div>
      <div className="flex justify-center mt-72 gap-8 mb-24">
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
          <div className="">
            <img className="mx-auto mt-10" src={imageUrl} />
            <p className="text-blue-950 text-xl font-bold mt-2 text-center">
              Ancho 110mm
            </p>
          </div>
        </div>
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
          <div className="">
            <img className="mx-auto mt-10" src={imageUrl2} />
            <p className="text-blue-950 text-xl font-bold mt-2 text-center px-3">
              Color de etiqueta a eleccion
            </p>
          </div>
        </div>
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
          <div className="">
            <img className="mx-auto mt-6" src={imageUrl3} />
            <p className="text-blue-950 text-xl font-bold mt-2 text-center">
              Largo ilimitado
            </p>
          </div>
        </div>
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400  border-2 border-white">
          <div className="">
            <img className="mx-auto mt-10" src={imageUrl4} />
            <p className="text-blue-950 text-xl font-bold mt-2 text-center p-1">
              Textiles y autoadhesivas
            </p>
          </div>
        </div>
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
          <div className="">
            <img className="mx-auto mt-10" src={imageUrl5} />
            <p className="text-blue-950 text-xl font-bold mt-2 text-center">
              Unico color
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;

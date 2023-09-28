import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function SingleCard({ image, title, list, list2 }) {
  return (
    <div className="w-286 h-[435px]">
      <div className="bg-gray-200 rounded-t-[20px] bg-transparent">
        <img
          src={image}
          alt="Imagen"
          className="w-full h-[233px] object-cover"
        />
      </div>
      <div className="bg-azul-card p-4">
        <p className=" text-gray-200 text-xl font-bold font-['Roboto, sans_serif']">
          {title}
        </p>
        <li className="mt-1 text-gray-200 text-base font-['Roboto, sans_serif']">
          {list}
        </li>
        <li className=" text-gray-200 text-base font-['Roboto, sans_serif']">
          {list2}
        </li>
        <button class="bg-white text-cyan-900 py-1 rounded-full mt-2 px-[21.74px] text-center text-sm font-semibold font-['Poppins, sans_serif'] leading-normal tracking-tight transition-all">
          Pedir
        </button>
      </div>
    </div>
  );
}

export default SingleCard;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

export function SingleCard({image, title}) {
  return (
    <Card className="mt-4 h-[480px] w-72 gap-8 object-cover bg-cyan-900 rounded-tl-[10px] rounded-tr-[10px]">
      <CardHeader
        color="blue-gray"
        className="mx-[1.2px] mt-[0.8px] h-[254px] w-full object-cover shadow-md"
      >
        <img className="" src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="-mt-10 mb-2 text-white text-left">
          {title}
        </Typography>
        <Typography className="text-gray-300 text-left mt-4 font-normal font-['Roboto, sans_serif']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cumque.
        </Typography>
      </CardBody>
      <CardFooter className="-mt-10 pt-0 text-left">
        <Button className="bg-white -mt-2 text-cyan-900 border border-cyan-900 font-['Roboto, sans_serif'] hover:bg-gray-200 transition-all">
          Pedir
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleCard;

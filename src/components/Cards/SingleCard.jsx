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
    <Card className="mt-4 w-72 gap-8 object-cover bg-azul-card rounded-none rounded-t-xl">
      <CardHeader
        color="blue-gray"
        className="mx-[1.2px] mt-[0.8px] w-full h-[233px] shadow-md rounded-t-xl rounded-b-none"
      >
        <img className="rounded-none z-50" src={image} alt="card-image" />
      </CardHeader>
      <CardBody className='h-[138px] w-full'>
        <Typography variant="h4" className="-mt-16 text-white text-left">
          {title}
        </Typography>
        <Typography className="text-gray-300 text-left mt-4 font-normal font-['Roboto, sans_serif']">
          <li>{list}</li>
          <li>{list2}</li>
        </Typography>
      </CardBody>
      <CardFooter className="-mt-10 pt-0 text-left">
        <Button className="bg-white mt-2 px-7 text-azul-card border rounded-full border-azul-card font-['Roboto, sans_serif'] hover:bg-gray-200 transition-all">
          Pedir
        </Button>
      </CardFooter>
    </Card>
  );
}

export default SingleCard;

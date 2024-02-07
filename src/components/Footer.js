import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8" style={{ marginLeft: 300 }}>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Famenontsoa ETU001945 
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Toky ETU001973
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Koloina ETU002019
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Toavina ETU002078
            </Typography>
          </li>
        </ul>
      </div>
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Bônôkany
      </Typography>
    </footer>
  );
}
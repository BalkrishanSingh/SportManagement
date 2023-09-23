import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  
  export default function Sports() {
    return (
      <div className="container mt-6 bg-cream">
        <Card className="bg-cream">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4">
              Sports Circular
            </Typography>
  
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Serial No</th>
                  <th className="px-4 py-2">Tournament Name</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Football Tournament</td>
                  <td className="border px-4 py-2">2023-09-30</td>
                  <td className="border px-4 py-2">Sports Complex</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Basketball Championship</td>
                  <td className="border px-4 py-2">2023-10-15</td>
                  <td className="border px-4 py-2">Basketball Court</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
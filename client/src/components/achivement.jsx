import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  
  export default function AchievementCard() {
    return (
      <div className="container mt-6 bg-cream">
        <Card className="bg-cream">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-4">
             Achievement
            </Typography>
  
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Serial No</th>
                  <th className="px-4 py-2"> Name</th>
                  <th className="px-4 py-2">Sport</th>
                  <th className="px-4 py-2">Achievement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Sanya</td>
                  <td className="border px-4 py-2">badminton</td>
                  <td className="border px-4 py-2"> 2nd position in Inter college </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Arshdeep Kaur</td>
                  <td className="border px-4 py-2">Basketball</td>
                  <td className="border px-4 py-2"> 1st position in district</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
import { Card, CardBody, Typography, Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Nav } from "./Nav";
const TableHead = ["Serial No", "Name", "Sport", "Achievement"];

export const AthleteTable = () => {
  const [AthleteData, SetAtheleteData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/athlete/", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        SetAtheleteData(resp);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Nav></Nav>
      <Card className="bg-cream h-full w-full overflow-scroll">
        <CardBody>
          {AthleteData.length !== 0 ? (
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TableHead.map((head) => (
                    <th
                      key={head}
                      className="border border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AthleteData.map(({ sno, name, sport, achievement }) => (
                  <tr key={sno} className="even:bg-blue-gray-50/50">
                    <td className="border px-4 py-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sno}
                      </Typography>
                    </td>
                    <td className="border px-4 py-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="border px-4 py-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sport}
                      </Typography>
                    </td>
                    <td className="border px-4 py-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {achievement}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Alert variant="ghost">
              <span>No Athelete Information !</span>
            </Alert>
          )}
        </CardBody>
      </Card>
    </>
  );
};

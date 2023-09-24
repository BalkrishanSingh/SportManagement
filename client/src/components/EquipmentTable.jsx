import { Nav } from "./Nav";
import { Card, Typography, Alert } from "@material-tailwind/react";
import { useState, useEffect } from "react";

import "../css/main.css";

const TableHead = ["SNo", "Name", "Amount", ""];

export const EquipmentTable = () => {
  const [EquipmentData, SetEquipmentData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/equipment/", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        SetEquipmentData(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(EquipmentData);
  return (
    <>
      <Nav></Nav>
      <Card className="h-full w-full overflow-scroll">
        {EquipmentData.length !== 0 ? (
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TableHead.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
              {EquipmentData.map(({ sno, name, sport, amount }, index) => (
                <tr key={sno} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sno}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sport}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Alert variant="ghost">
            <span>No Equipment Information !</span>
          </Alert>
        )}
      </Card>
    </>
  );
};

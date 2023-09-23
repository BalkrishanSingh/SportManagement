import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["S No.", "Sports Name", "Name of Equipment", "No. of Equipment", ""];

const TABLE_ROWS = [
  {
    serial_no: 1,
    sports_name: "Soccer",
    Name_Of_Equipment: "Soccer Ball",
    Number_Of_Equipment: 10,
  },
  {
    serial_no: 2,
    sports_name: "Basketball",
    Name_Of_Equipment: "Basketball",
    Number_Of_Equipment: 5,
  },
  {
    serial_no: 3,
    sports_name: "Tennis",
    Name_Of_Equipment: "Tennis Racket",
    Number_Of_Equipment: 15,
  },
  {
    serial_no: 4,
    sports_name: "Volleyball",
    Name_Of_Equipment: "Volleyball",
    Number_Of_Equipment: 8,
  },
  {
    serial_no: 5,
    sports_name: "Badminton",
    Name_Of_Equipment: "Badminton Shuttlecock",
    Number_Of_Equipment: 20,
  },
];

export default function EquipmentTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4 ${
                  index === TABLE_HEAD.length - 1 ? "w-20" : ""
                }`}
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
          {TABLE_ROWS.map(({ serial_no, sports_name, Name_Of_Equipment, Number_Of_Equipment }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={serial_no}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {serial_no}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {sports_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Name_Of_Equipment}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Number_Of_Equipment}
                  </Typography>
                </td>
                <td className={classes}>
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
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

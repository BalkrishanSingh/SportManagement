import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export default function SimpleCard() {
    return (
      <div className="container flex justify-between">
        {/* Left Card */}
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              News/Events
            </Typography>
            <Typography>
              <p>1. Football Tournament</p>
              <p>2. Red Light / Green Light</p>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
  
        {/* Center Card */}
        <Card className="mt-6 w-96">
          {/* Vision Card */}
          <Card className="mb-6">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Vision
              </Typography>
              <Typography>
                <p>
                  Promotion of the personal and professional development of
                  students through designing and implementing programs of
                  international standard that support healthy lifestyles and
                  academic success.
                </p>
              </Typography>
            </CardBody>
          </Card>
  
          {/* Mission Card */}
          <Card>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Mission
              </Typography>
              <Typography>
                <p>
                  1. To honor academic mission of the college by promoting general
                  welfare of the students.
                </p>
                <p>
                  2. To promote physical activity and help individuals to enhance
                  their health, fitness and quality of life.
                </p>
                <p>
                  3. To develop state of art infrastructure of international
                  standard.
                </p>
                <p>
                  4. To develop overall personality of the students with focus on
                  core values like teamwork, respect, integrity, balance,
                  humility, accountability, and sportsmanship.
                </p>
                <p>
                  5. To inculcate moral, ethical and spiritual values through
                  intramural and extramural activities.
                </p>
                <p>
                  6. To engage the mind, to elevate the spirit and stimulate the
                  best effort of all who are associated with the college.
                </p>
              </Typography>
            </CardBody>
          </Card>
        </Card>
  
        {/* Right Card */}
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Contact Us
            </Typography>
            <Typography>
              <p>Email: sportsgndec.ac.in</p>
              <p>Phone: 987***2324</p>
            </Typography>
          </CardBody>
        </Card>
      </div>
    );
  }
  
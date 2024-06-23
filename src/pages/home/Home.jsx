import { Box, Button, Card, CardBody, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoTelescope } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { FaCloud } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchCurrentWeather } from "../../services/api";


const Home = () => {

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
    const storedData = JSON.parse(localStorage.getItem('current-weather'));
    if (storedData) {
      setWeather(storedData);
    }
    else {
      fetchCurrentWeather(latitude, longitude).then((res) => {
        setWeather(res.data);
        localStorage.setItem('current-weather', JSON.stringify(res.data));
      }).catch((err) => {
        console.log('Error in API', err);
      });
    }
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div>
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <Box p={"5px"} >
          <Flex m='4' direction={{ base: "column", md: "row", }} justifyContent={"space-between"} maxH={"fit-content"} alignItems={"center"}>
            <Container>
              <Stack m='6' spacing='3'>
                <Heading size='lg'>Explore the Night Sky</Heading>
                <Text>
                  Monitor Celestial events, identify contellations, and track the movement of stars.
                </Text>
              </Stack>
            </Container>

            <Container>
              <Card maxW='md' overflow='hidden' variant='outline'>
                <CardBody>
                  <Stack m='6' spacing='3'>
                    <Text display={"inline-flex"} alignItems={"center"} gap={"5"}>
                      <FaLocationDot color="lightgreen" />
                      {weather && weather.name}, {weather.sys.country}
                    </Text>

                    <Flex justifyContent={"space-around"} >
                      <Flex justifyContent={"space-evenly"} alignItems={"center"} gap={"5"}>
                        <Box>
                          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
                        </Box>

                        <Flex direction={"column"} gap={"3"}>
                          <Text>{weather.main.temp} &deg;C</Text>
                          <Text>{(weather.weather[0].description)}</Text>
                        </Flex>
                      </Flex>

                      <Box borderRight={"1px solid rebeccapurple"}></Box>

                      <Flex direction={"column"} gap={"3"}>
                        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                          <WiHumidity />
                          <Text>{weather.main.humidity}%</Text>
                        </Flex>
                        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                          <FaWind />
                          <Text>{weather.wind.speed}m/s</Text>
                        </Flex>
                        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                          <FaCloud />
                          <Text>{weather.clouds.all}%</Text>
                        </Flex>
                        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
                          <MdOutlineVisibility />
                          <Text>{weather.visibility} meters</Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Text color='pink.600' fontSize='xl' display={"inline-flex"} alignItems={"center"} gap={"5"}>
                      <IoTelescope />
                      {"Average Stargazing Conditions"}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Container>
          </Flex>

          {/* Action Buttons */}
          <Flex marginTop={"10"} direction={{ base: "column", md: "row", }} justifyContent={"space-evenly"} maxH={"max-content"} alignItems={"center"}>
            <Link to={"/apod"}>
              <Button className="action-buttons">
                NASA&apos;s APOD
              </Button>
            </Link>

            <Link to={"/astro-events"}>
              <Button className="action-buttons">
                Astronomical Event
              </Button>
            </Link>

            <Link to={"/rocket-launches"}>
              <Button className="action-buttons">
                Rocket Launch
              </Button>
            </Link>

            <Link to={"/iss-tracker"}>
              <Button className="action-buttons">
                ISS Tracker
              </Button>
            </Link>
          </Flex>

        </Box>
      ) : null}
    </div >
  )
}

export default Home

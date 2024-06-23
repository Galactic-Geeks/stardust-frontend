import { useEffect, useState } from 'react'
import { fetchApodData } from '../../services/api.js'
import { Card, CardBody, CardHeader, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Apod = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('apod-data'));
    if (storedData) {
      setData(storedData);
    }
    else {
      fetchApodData().then((res) => {
        setData(res.data);
        localStorage.setItem('apod-data', JSON.stringify(res.data));
      }).catch((err) => {
        console.log('Error in API', err);
      });
    }
  }, []);

  return (
    <Container maxW='2xl' p={"5"}>
      <Card variant='elevated'>
        <CardHeader>
          <Stack as='div' mt='6' spacing='3' flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Heading size='md'>{data && data.title}</Heading>
            <Text color='pink.600' fontSize='2xl'>
              {data && new Date(data.date).toLocaleDateString({}, {month: 'long', day: 'numeric', year: 'numeric'})}
            </Text>
          </Stack>
        </CardHeader>
        <CardBody>
          <Image src={data && data.hdurl} alt='apod-image' borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <blockquote>
              {data && data.explanation}
            </blockquote>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Apod

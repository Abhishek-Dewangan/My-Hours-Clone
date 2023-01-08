import React, {useState} from 'react';
import {Box, Image, Heading, Input, Text, Button, Flex} from '@chakra-ui/react';
import {FormControl, FormLabel, FormHelperText} from '@chakra-ui/react';
import styles from './Signup.module.css';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../../components/Hedear/Header';
import Footer from '../../components/Footer/Footer';

const Signup = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = JSON.stringify(form);
    fetch('https://my-hours.onrender.com/signup', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => navigate('/signin'))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Header />
      <Box pt='150' mb='50'>
        <Box boxShadow='2xl' h='600' w='35%' m='auto' pt='70' p='35'>
          <Flex justify={'space-between'}>
            <Image
              h='35'
              src='https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg'
            />
            <Text color={'blue.500'} fontWeight={'bold'}>
              <Link to='/signin'>Sign In</Link>
            </Text>
          </Flex>
          <Heading fontSize='26' fontWeight='700' mt='30' textAlign='left'>
            Welcome to My Hours
          </Heading>

          <FormControl>
            <FormLabel mt='25' fontSize='sm'>
              FULL NAME
            </FormLabel>
            <FormHelperText textAlign='left'>
              So we know what to call you in the app
            </FormHelperText>
            <Input
              id='a'
              type='text'
              mt='15'
              name='name'
              onChange={(e) => handleChange(e)}
            />

            <FormLabel mt='25' fontSize='sm'>
              EMAIL
            </FormLabel>
            <FormHelperText textAlign='left'>
              You will use this email to login
            </FormHelperText>
            <Input
              id='b'
              type='email'
              mt='15'
              name='email'
              onChange={(e) => handleChange(e)}
            />

            <FormLabel mt='25' fontSize='sm'>
              PASSWORD
            </FormLabel>
            <Input
              id='c'
              type='password'
              placeholder='Set password'
              name='password'
              onChange={(e) => handleChange(e)}
            />

            <Text fontSize='sm' mt='15'>
              By signing up you agree to the{' '}
              <span className={styles.terms}>Terms of Use </span>
            </Text>

            <Button w='100px' mt='5' colorScheme='blue' onClick={handleSubmit}>
              Register
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Signup;

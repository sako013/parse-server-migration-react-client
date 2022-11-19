import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis'


const Home = () => {

  const { Moralis } = useMoralis();

  async function Shoper() {

    const Shop = Moralis.Object.extend('Shop')

    const shopping = new Shop()

    shopping.set('shopItem', 'watch')
    shopping.set('etheAddress', '0x12')

    await shopping.save()

  }

  return (
    <VStack alignItems={'start'}>
      <Heading mb={8}>Home</Heading>
      <button onClick={Shoper}>shopper</button>
    </VStack>
  );
};

export default Home;

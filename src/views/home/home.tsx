import React from 'react';
import {Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {t} from '@i18n';
import {Wrapper} from './home.styled';

const Home = () => {
  const {setOptions} = useNavigation();

  setOptions({
    title: t('views.home.title'),
  });

  return (
    <Wrapper>
      <Text>Home</Text>
    </Wrapper>
  );
};

export default Home;

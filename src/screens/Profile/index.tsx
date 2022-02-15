import Button from '@atoms/Button';
import Text from '@atoms/Text';
import ImageSelector from '@molecules/ImageSelector';
import Layout from '@organisms/Layout';
import { RootState } from '@store/';
import { setProfileImage } from '@store/actions/user';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const profileImage = useSelector((state: RootState) => state.user.profileImage);
  const dispatch = useDispatch();
  console.log("profileImage----", profileImage)
  
  const handleOnImage = (uri: string) => {
    console.log("URI---", uri)
    dispatch(setProfileImage(uri));
  }

  return (
    <Layout>
      <Text> Profile </Text>
      <ImageSelector onImage={handleOnImage} />
    </Layout>
  );
};

export default Profile;

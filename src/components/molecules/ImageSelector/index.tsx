import React, { useState } from 'react';

import { Asset, CameraOptions, ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import { Image, View } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';

import { isIos } from '@theme/constants';
import Text from '@atoms/Text';
import Button from '@atoms/Button';

import styles from './styles';

interface ImageSelectorProps {
    onImage: (uri: string) => void;
}

const ImageSelector = ({ onImage }: ImageSelectorProps) => {
    const [pickerResponse, setPickerResponse] = useState<Asset>();

    const handleTakePicture = async () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
        }

        let granted;

        if (isIos) {
            granted = await request(PERMISSIONS.IOS.CAMERA);
        } else {
            granted = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if (granted === RESULTS.GRANTED) {
            launchCamera(options, (res: ImagePickerResponse) => {
                if (!res.didCancel && !res.errorCode && res.assets?.length) {
                    setPickerResponse(res.assets[0]);
                    onImage && onImage(res.assets[0].uri);
                }
            })
        } else {
            console.warn('Permission denied')
        }
    }
    return (
        <View>
            <View>
                {!pickerResponse ? <Text>No image picked yet</Text> : (
                    <Image style={styles.image} source={{ uri: pickerResponse.uri }} />
                )}
            </View>
            <Button variation='secondary' onPress={handleTakePicture}><Text>Update picture</Text></Button>
        </View>
    )
}

export default ImageSelector;
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/FontAwesome';

const StoreScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Hàm này sẽ được gọi khi màn hình được tải

    // Yêu cầu quyền truy cập vị trí
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Lấy thông tin vị trí hiện tại
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleGoToCurrentLocation = () => {
    if (mapRef.current && location) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find a Store</Text>
      {location ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            description="You are here!"
          />
          
          {/* Thêm đánh dấu đến địa chỉ cụ thể */}
          <Marker
            coordinate={{
              latitude: 10.870198532393648,
              longitude: 106.80310774583567,
            }}
            title="Target Location"
            description="This is your target address"
          >
            <Callout>
              <View>
                <Text>Trường Đại học Công nghệ Thông tin</Text>
                <Text>Khu phố 6 - Linh Trung</Text>
                <TouchableOpacity
                  style={styles.Button}
                  onPress={() => {
                    // Tạo URL để chuyển hướng đến Google Maps với tọa độ cụ thể
                    const url = `https://www.google.com/maps/dir/?api=1&destination=10.870198532393648,106.80310774583567&travelmode=driving`;

                    // Mở ứng dụng Google Maps
                    Linking.openURL(url).catch(err =>
                      console.error('Could not open URL', err)
                    );
                  }}
                >
                  <Text style={styles.button}>Direction</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        </MapView>
      ) : (
        <Text>Loading location...</Text>
      )}
      {errorMsg && <Text>Error: {errorMsg}</Text>}
      
      {/* Nút quay trở lại vị trí hiện tại */}
      <TouchableOpacity
        style={styles.backToLocationButton}
        onPress={handleGoToCurrentLocation}
      >
       <Image
        source={require('./../assets/location.png')}
        style={styles.location}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  map: {
    width: '100%',
    height: '95%',
  },
  buttonLocation: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    color: 'black',
    fontWeight: 'bold',
    
  },
  backToLocationButton: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  location:{
    width: 20,
    height: 20,
 
  },
});

export default StoreScreen;

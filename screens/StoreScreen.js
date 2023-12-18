import React, { useEffect, useState, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';


const StoreScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {

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

  const handleMarkerPress = () => {
    // Zoom in bằng cách thay đổi giá trị latitudeDelta và longitudeDelta
    if (mapRef.current && location) {
      mapRef.current.animateToRegion({
        latitude: 10.870198532393648,
        longitude: 106.80310774583567,
        latitudeDelta: 0.01, // Điều chỉnh giá trị này để zoom in hoặc zoom out
        longitudeDelta: 0.01, // Điều chỉnh giá trị này để zoom in hoặc zoom out
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
          
          <Marker
            coordinate={{
              latitude: 10.870198532393648,
              longitude: 106.80310774583567,
            }}
            title="Target Location"
            description="This is your target address"
            onPress={handleMarkerPress}
          >
            <Callout style={styles.calloutContainer}>
              <View>
                <Text style={styles.calloutText}>Trường Đại học Công nghệ Thông tin - ĐHQG TPHCM</Text>
                <Text style={styles.calloutText}>Khu phố 6 - Linh Trung - Thủ Đức</Text>
                <TouchableOpacity
                  style={styles.directionButton}
                  onPress={() => {
                    // Tạo URL để chuyển hướng đến Google Maps với tọa độ cụ thể
                    const url = `https://www.google.com/maps/dir/?api=1&destination=10.870198532393648,106.80310774583567&travelmode=driving`;

                    // Mở ứng dụng Google Maps
                    Linking.openURL(url).catch(err =>
                      console.error('Could not open URL', err)
                    );
                  }}
                >
                  <Text style={styles.directionButtonText}>Direction</Text>
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
  directionButton: {
    backgroundColor: 'white',
    paddingVertical: 3, 
    paddingHorizontal: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
  directionButtonText: {
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
  calloutContainer: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    marginLeft: -160,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calloutText: {
    marginBottom: 5,
    alignItems: 'center',
  },
});

export default StoreScreen;

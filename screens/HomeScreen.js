import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Phần tiêu đề */}
      <View style={styles.header}>
        <Text style={styles.headerText}>It's a great day for coffee ☕</Text>
        <View style={styles.headerContent}>
          <View style={styles.buttonsLeft}>
            <TouchableOpacity style={styles.signInButton}>
              <Text>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inboxButton}>
              <Text>Inbox</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            {/* Thêm hình ảnh của người dùng */}
            {/* <Image
              source={require('./path-to-profile-image.png')}
              style={styles.profileImage}
            /> */}
             <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần nội dung tin tức */}
      <ScrollView
        style={styles.imageList}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('./../assets/starbucks-1.jpg')}
          style={styles.smallImage}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,

  },
  signInButton: {

    marginRight: 8,

  },
  inboxButton: {

    marginRight: 8,

  },
  profileButton: {

  },



  smallImage: {
    width: 382,    // Điều chỉnh kích thước chiều rộng của hình ảnh
    height: 200,   // Điều chỉnh kích thước chiều cao của hình ảnh
    marginRight: 16,
    borderRadius: 8,
  },
});

export default HomeScreen;

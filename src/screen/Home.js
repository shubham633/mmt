import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SideMenuView,RNNDrawer } from "react-native-navigation-drawer-extension";
import { Drawer } from '../navigation/Nav'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      autoplay:'true',
      carouselItems: [
        {imageUri:require('../assets/hotel1.jpg')},
        {imageUri:require('../assets/hotel2.jpg')},
        {imageUri:require('../assets/hotel3.jpg')},
        {imageUri:require('../assets/hotel4.jpg')},
        {imageUri:require('../assets/hotel5.jpg')},
      ]
    }
  }

  componentDidMount(){
      this.setState({
        autoplay:setInterval(()=>{
            this.setState({
                activeIndex:this.state.activeIndex === this.state.carouselItems.length ? 0 : this.state.activeIndex + 1
            })
        },3000)
      });
  }

    componentWillUnmount(){
      clearInterval(this.state.autoplay);
  }

  carouselImage({ item, index }) {
    return (
      <View style={styles.screenMargin}>
        <Image source={item.imageUri} style={styles.imageUri} />
      </View>
    )
  }

  render() {
    return (
        <View>
          <Icon name="bars" size={30} color="black" 
            style={{marginLeft:10}}
            onPress={()=>{Drawer()}}
          />
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={400}
            itemWidth={400}
            autoplay={this.state.autoplay}
            renderItem={this.carouselImage}
            onSnapToItem={index => this.setState({ interval: index })}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  screenMargin: {
    alignItems:'center'
  },
  imageUri: {
    height: 150,
    width: 350,
    borderRadius:10,
  },
})

export default Home;
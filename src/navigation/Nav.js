import React, { Component } from 'react';
import { RNNDrawer } from "react-native-navigation-drawer-extension";
import { Navigation } from 'react-native-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from '../components/Icons';


export const AuthStack = () => Navigation.setRoot({
    root: {
        stack: {
            id:'App',
            children: [
                {
                    component: {
                        name: 'Signin',
                        options:{
                            topBar:{
                                title:{
                                    text:'Signin',
                                    color:'black'
                                }
                            }
                        }
                    }
                },
                
                {
                    component: {
                        name: 'Signup',
                        options:{
                            topBar:{
                                title:{
                                    text:'Signup'
                                }
                            }
                        }
                    }
                }
            ],
        }
    }
});

const iconColor = "#444";
const selectedIconColor = 'rgb(100,0,0)';
export const BottomTab = () =>{
    Navigation.setRoot({
        root: {
          bottomTabs: {
            id: "bottomTabsMain",
            children: [
                {
                    component: {
                        name: "Home",
                        options: {
                          bottomTab: {
                            fontSize: 11,
                            text: "Home",
                            icon: icons[0],
                            iconColor,
                            selectedIconColor
                          }
                        }
                    }
                },
                {
                    component: {
                        name: "MyTrips",
                        options: {
                          bottomTab: {
                            fontSize: 11,
                            text: "MyTrips",
                            icon: icons[1],
                            iconColor,
                            selectedIconColor
                          }
                        }
                      }
                },
                {
                    component: {
                        name: "Offers",
                        options: {
                          bottomTab: {
                            fontSize: 11,
                            text: "Offers",
                            icon: icons[2],
                            iconColor,
                            selectedIconColor
                          }
                        }
                      }
                },
                {
                    component: {
                        name: "TripIdeas",
                        options: {
                          bottomTab: {
                            fontSize: 11,
                            text: "TripIdeas",
                            icon: icons[3],
                            iconColor,
                            selectedIconColor
                          },
                        }
                      }
                },
                {
                    component: {
                        name: "Wallet",
                        options: {
                          bottomTab: {
                            fontSize: 11,
                            text: "Wallet",
                            icon: icons[4],
                            iconColor,
                            selectedIconColor
                          }
                        }
                      }
                },
            ]
          }
        }
      });
};


export const Drawer = () =>{
  RNNDrawer.showDrawer({
    component: {
      name: "Drawer",
      passProps: {
        animationOpenTime: 300,
        animationCloseTime: 300,
        direction: "left",
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.6,
        drawerScreenWidth: "75%" || 445, 
        drawerScreenHeight: "100%" || 700,
        style: { 
          backgroundColor: "white",
        },
      },
    }
  });
}

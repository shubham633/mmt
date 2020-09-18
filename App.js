import {Navigation} from 'react-native-navigation';
import {register} from './src/register/Register';
import React,{Component} from 'react';

register();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Signin'
      }
    },
  });
});

import { User } from '@react-native-google-signin/google-signin';
import { ThemeMode } from '@rneui/themed';
import Toast from 'react-native-simple-toast';

import { User as BaseUser } from '@/redux/types/auth.type';

export const isValidEmail = (email: string) => {
  if (email === '') {
    return false;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};

export const getNowTime = () => {
  var time = new Date().getHours();
  let greeting = '';
  switch (time) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: {
      greeting = 'Good morning 👋';
      break;
    }
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18: {
      greeting = 'Good afternoon 👋';
      break;
    }
    default: {
      greeting = 'Good evening 👋';
      break;
    }
  }
  return greeting;
};

export function transformUser(user: User): BaseUser {
  return {
    uuid: user.user.id,
    email: user.user.email,
    address: '',
    avatar: {
      url: user.user.photo || '',
      createdAt: new Date(0),
      updatedAt: new Date(0),
      deletedAt: new Date(0),
      public_id: '',
      secure_url: '',
      uuid: '',
    },
    updatedAt: new Date(0),
    createdAt: new Date(0),
    deletedAt: new Date(0),
    device_token: '',
    dob: '',
    full_name: user.user.name || '',
    gender: 0,
    nick_name: '',
    password: '',
    phone_number: '',
    role: [],
    status: true,
    summary: '',
  };
}

export const capitalizeFirstLetter = (string: String) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const CustomToast = (value: string, time?: number) => {
  Toast.show(value, time || Toast.SHORT);
};

export const getMode = (mode: ThemeMode) => {
  switch (mode) {
    case 'dark':
      return true;
    case 'light':
      return false;
    default:
      return false;
  }
};

export const transformKB = (value: number): string => {
  var kb = value / 1024;
  return kb.toFixed(2) + ' KB';
};

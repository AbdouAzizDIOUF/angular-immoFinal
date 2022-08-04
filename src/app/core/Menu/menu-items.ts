import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMS = [
    {state: 'home', name: 'Home', type: 'link'},
    {
        state: 'biens',
        name: 'Biens',
        type: 'sub',
        children: [
            {state: 'appartement', name: 'Appartement', type: 'link'},
            {state:'bureau', name: 'Bureau', type: 'link',},
            {state:'villa', name: 'Villa', type: 'link',},
            {state:'parcelle', name: 'Parcelle', type: 'link',},
        ]
    },
    {
        state: 'acheter',
        name: 'Acheter',
        type: 'sub',
        children: [
            {state: 'acheter', name: 'Acheter', type: 'link'},
            {state:'louer', name: 'Louer', type: 'link'}
        ]
    },
    {state: 'about-us', name: 'About', type: 'link'},
    {state: 'contact-us', name: 'Contacts', type: 'link'}
];


@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }
}



/*
    {state: 'pages', name: 'Pages', type: 'sub',
        children: [
            {state: 'booking', name: 'Booking', type: 'link'},
            {state: 'about-us', name: 'About', type: 'link'},
            {state: 'contact-us', name: 'Contact', type: 'link'}
        ]
    },

    {state: 'pages', name: 'Pages', type: 'sub',
        children: [
            {state: 'booking', name: 'Booking', type: 'link'},
            {state: 'about-us', name: 'About', type: 'link'},
            {state: 'contact-us', name: 'Contact', type: 'link'}
        ]
    },
{
    state: 'admin',
    name: 'User Panel',
    type: 'sub',
    children: [
      {state: 'dashboard', name: 'Dashboard', type: 'link'},
      {state: 'messages', name: 'Messages', type: 'link'},
      {state: 'bookings', name: 'Bookings', type: 'link'},
      {state: 'reviews', name: 'Reviews', type: 'link'},
      {state: 'bookmarks', name: 'Bookmarks', type: 'link'},
      {state: 'list', name: 'My Listing', type: 'link'},
      {state: 'add-list', name: 'Add List', type: 'link'},
      {state: 'profile', name: 'Profile', type: 'link'}
    ]
  },

{
  state: 'session',
  name: 'Session',
  type: 'sub',
  children: [
     {state: 'login', name: 'Login', type: 'link'},
     {state: 'signup', name: 'Register', type: 'link'},
     {state: 'forgot-password', name: 'Forgot Password', type: 'link'},
     {state: 'coming-soon', name: 'Coming Soon', type: 'link'}
  ]
},

/*{
         state: 'half-map',
         name: 'Half Screen Map',
         type: 'sub',
         children: [
            {state: 'list', name: 'Layout 1', type: 'link'},
            {state: 'grid', name: 'Layout 2', type: 'link'}
          ]
      },



*/

import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
    
    {
        title:'Dashboard',
        icon: 'dashboard',
        home:true,
        expanded: false,
        children: [
            {
                title: 'Cards',
                icon: 'card',
                link: '/dashboard/cards'
              },
              {
                title: 'Charts',
                icon: 'chart',
                link: '/dashboard/charts'
              }
        ]
    },
    {
      title: 'Profile',
      icon: 'profile',
      expanded: false,
      home: true,
      children: [
        {
          title: 'Change Password',
          link: '/dashboard'
        },
        {
          title: 'Privacy Policy',
          link: '/dashboard'
        },
        {
          title: 'Logout',
          link: '/dashboard'
        },
      ],
    },
    {
      title: 'Shop',
      icon: 'cart',
      link: '/dashboard',
      home: true,
    },
    {
      title: 'Orders',
      icon: 'others',
      link: '/dashboard',
      home: true,
    },
  ];title: 'dashboard'
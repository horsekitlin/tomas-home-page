import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './RecipeReviewCard';


const items = [
  // {
  //   image: 'http://media.tumblr.com/c98ae6c631289344128c90473e1bc532/tumblr_inline_mlrdsdFfoW1qz4rgp.jpg',
  //   header: 'Tomas Blog',
  //   github: 'https://github.com/horsekitlin/horsekitlin.github.io',
  //   demo: 'http://blog.tomas.website/',
  //   members: [
  //     {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
  //   ],
  //   description: [
  //     'Tomas blog Area',
  //     '陸續新增中...'
  //   ]
  // },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/280px-React-icon.svg.png',
    header: 'React Component Demo',
    demo: 'https://react-demo.tomas.website/',
    github: 'https://github.com/horsekitlin/react-demo',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      'React Component Demo Area',
      '陸續新增中...'
    ]
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/280px-React-icon.svg.png',
    header: 'React Admin Demo',
    demo: 'https://admindemo.tomas.website/',
    github: 'https://github.com/horsekitlin/react-skelton',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      'React Admin Demo'
    ]
  },
  // {
  //   image: 'http://drawlife.tomas.website/images/lollipop-3.png',
  //   header: '繪圖人生(DrawLife)',
  //   demo: 'https://drawlife.tomas.website/',
  //   github: 'https://github.com/horsekitlin/drawlife',
  //   members: [
  //     {name: 'Louis Jeng', url: 'https://github.com/louisje'},
  //     {name: 'Chris Lin', url: 'https://github.com/chris-lin'},
  //     {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'},
  //     {name: 'Simon', url: 'https://github.com/SimonOssii'},
  //     {name: 'Sean Lin', url: 'https://github.com/seanlin0324'}
  //   ],
  //   description: [
  //     '「繪塗人生」是一個具有塗鴉板功能的聊天室',
  //     '是「Taiwan Up Up 好好玩」團隊參加 Nodeknockout 2012 的參賽作品。'
  //   ]
  // },
  {
    image: 'https://cimg.cnyes.cool/prod/news/4773114/xl/0121436c0dc8d18a4b27cba339c25855.jpg',
    header: '點數交換後台 API Swagger',
    demo: 'https://token-admin.tomas.website/api-docs/',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      '實作陽春掛單買賣系統後台 API',
    ]
  },
  {
    image: 'https://truffleframework.com/img/tutorials/pet-shop/petshop.png',
    header: 'Block chain pet store',
    demo: 'https://pet-store.tomas.website/',
    github: 'https://github.com/horsekitlin/pet-shop',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      '第一個Dapp 區塊鏈的寵物商店實作',
    ]
  }
];

function Content(props) {
  return (
    <Grid container spacing={8}>
      {
        items.map(item => 
          <Grid item><RecipeReviewCard content={item} /></Grid>)
      }
    </Grid>
  );
}

export default Content;
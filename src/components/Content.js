import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './RecipeReviewCard';


const items = [
  {
    image: 'http://media.tumblr.com/c98ae6c631289344128c90473e1bc532/tumblr_inline_mlrdsdFfoW1qz4rgp.jpg',
    header: 'Tomas Blog',
    github: 'https://github.com/horsekitlin/horsekitlin.github.io',
    demo: 'http://blog.tomas.website/',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      'Tomas blog Area',
      '陸續新增中...'
    ]
  },
  {
    image: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png',
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
    image: 'http://drawlife.tomas.website/images/lollipop-3.png',
    header: '繪圖人生(DrawLife)',
    demo: 'https://drawlife.tomas.website/',
    github: 'https://github.com/horsekitlin/drawlife',
    members: [
      {name: 'Louis Jeng', url: 'https://github.com/louisje'},
      {name: 'Chris Lin', url: 'https://github.com/chris-lin'},
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'},
      {name: 'Simon', url: 'https://github.com/SimonOssii'},
      {name: 'Sean Lin', url: 'https://github.com/seanlin0324'}
    ],
    description: [
      '「繪塗人生」是一個具有塗鴉板功能的聊天室',
      '是「Taiwan Up Up 好好玩」團隊參加 Nodeknockout 2012 的參賽作品。'
    ]
  },
  {
    image: 'https://cdn-images-1.medium.com/max/1600/1*N7vcpmENqVHTLhgjbrbsFg.jpeg',
    header: 'Drone CI/CD',
    demo: 'https://ci.tomas.website/',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      '基於 Docker 的 CI/CD 工具 Drone 所有編譯、測試的流程都在 Docker 容器中進行。',
      '開發者只需在專案中增加一個 .drone.yml 文件，將程式碼推送到 git，Drone 就能够自動化的进行編譯、測試、發布。'
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
    <Grid container spacing={16}>
      {
        items.map(item => 
          <Grid item><RecipeReviewCard content={item} /></Grid>)
      }
    </Grid>
  );
}

export default Content;
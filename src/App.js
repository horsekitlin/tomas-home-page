import React, { Fragment, Component } from 'react';
import { Container, Menu, Input, Grid, Card, Image, Divider, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const cards = [
  {
    image: 'http://drawlife.tomas.website/images/lollipop-3.png',
    header: '繪圖人生(DrawLife)',
    demo: 'http://drawlife.tomas.website/',
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
    demo: 'http://ci.tomas.website/',
    members: [
      {name: 'Tomas Lin', url: 'https://github.com/horsekitlin'}
    ],
    description: [
      '基於 Docker 的 CI/CD 工具 Drone 所有編譯、測試的流程都在 Docker 容器中進行。',
      '開發者只需在專案中增加一個 .drone.yml 文件，將程式碼推送到 git，Drone 就能够自動化的进行編譯、測試、發布。'
    ]
  }
];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu attached='top'>
          <Menu.Menu>
            <Menu.Item icon='bars' />
          </Menu.Menu>
        </Menu>
        <Container>
          <Grid style={{marginTop: '25px'}}>
              {cards.map(card => {
                return (
                  <Grid.Column style={{minWidth: '250px'}}>
                    <Card>
                    <Card.Content>
                      <Image floated='right' size='medium' src={card.image} />
                      <Card.Header>{card.header}</Card.Header>
                      <Card.Meta>
                        相關成員:
                          {card.members.map(member =>
                            <a href={member.url} target='_blank'><p>{member.name}</p></a>)}
                          
                      </Card.Meta>
                      <Divider />
                      <Card.Description>
                        {card.description.map(d => <p>{d}</p>)}
                      </Card.Description>
                      <Divider />
                      <Card.Content extra>
                        <Button.Group>
                          {card.demo && <Button
                            basic
                            primary
                            as='a'
                            target='_blank'
                            href={card.demo}>Demo</Button>}
                          {card.github && <Button
                            basic
                            primary
                            as='a'
                            target='_blank'
                            href={card.github}>Github</Button>}
                        </Button.Group>
                      </Card.Content>
                    </Card.Content>
                    </Card>
                  </Grid.Column>
                );
              })}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default App;

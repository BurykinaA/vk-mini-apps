import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import persik from '../img/persik.png';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, AdaptivityProvider,
	PanelHeaderBack,
	ConfigProvider,
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	SimpleCell,
	CardScroll,
	Card,
	CardGrid,
	ContentCard, ButtonGroup,
	Footer, Epic,TabbarItem, Tabbar, Image, } from '@vkontakte/vkui';

	import { Icon28MessageOutline, Icon28CrownOutline, Icon28UserCircleOutline, Icon28SchoolOutline
	} from '@vkontakte/icons';


const BuyArtefact = props =>{

	const [simple, setSimple] = useState('zero');
	const [data1, getData1] = useState([])
	const URL = 'http://127.0.0.1:8000/api/art/'+ props.id_a;
  
	useEffect(() => {
		fetchData()
	}, [])
  
  
	const fetchData = () => {
		fetch(URL)
			.then((res) =>
				res.json())
  
			.then((response) => {
				console.log(response);
				getData1(response);
			})
  
	}
  const [userId, setUserId] = useState(null);


		  const handleClick = () => {
  console.log("yes");

  async function fetchData() {
    const user = await bridge.send('VKWebAppGetUserInfo');
    setUserId(user);
    console.log(user);
    const response = await fetch('http://127.0.0.1:8000/api/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId: user.id, art_id: props.id_a})
    });

    const data = await response.json();
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(data);
  }

  fetchData(); // вызов асинхронной функции
};
    // const data1 = {
    //   name: 'John Doe',
    //   email: 'johndoe@example.com',
    //   message: 'Hello, World!'
    // };
	//
    // axios.post('/api/buy/', data1)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
   //}

	const handleClick1 = () => {console.log('pup')}
	return (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="museum"/>}
		>Покупка Артефакта</PanelHeader>
		<br/>
		<Group header={<Header mode="secondary"><h1>Артефакт {props.id_a} {data1.title}</h1></Header>}>
			<ContentCard

				src={data1.image_url}
				 onClick={
					handleClick}
				header={data1.title}
				text={<><a>Цена: {data1.price} ✧ </a> <br/><a> Доход: {data1.current_income} ✧/мин</a></>}
				caption={ <Button onClick={props.go}
				data-to="museums">  Купить</Button>}
				maxHeight={350}	
				height={300}
				width={500}	  
				>
				</ContentCard>
		
		
		
			{/* <ContentCard
				src="https://cdnn1.ukraina.ru/img/07e6/0c/02/1041436899_0:206:2905:1840_1920x0_80_0_0_c7022893b761781d76fe592010d14bd2.jpg"
				height={300}
				width={500}	  
				>
					<div style={{ paddingBottom: '42%' }} />
				</ContentCard> */}
				
    	</Group>
	
		<SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
         
          tabbar={
            (
				<Tabbar >
				<TabbarItem
				selected={simple === 'one'} 
                  text="Профиль"
				  onClick={props.go} data-to="home"
                >
					 <Icon28UserCircleOutline />
                </TabbarItem>
                <TabbarItem
				 selected={simple === 'two'}
                  text="Музеи"
				  onClick={props.go} data-to="museums"
                >
					<Icon28SchoolOutline/>
                </TabbarItem>
                <TabbarItem
                  text="Рейтинг"
				  selected={simple === 'three'}
				  onClick={props.go} data-to="persik"
                >
                  <Icon28CrownOutline/>
                </TabbarItem>
                
                
            
              </Tabbar>
            )
          }
        >
          
        </Epic>
      </SplitCol>
	</Panel>
);}

BuyArtefact.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default BuyArtefact;

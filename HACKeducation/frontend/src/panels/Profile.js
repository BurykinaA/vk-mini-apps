import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import persik from '../img/persik.png';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, AdaptivityProvider,
	PanelHeaderBack,
	IconButton,
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
	Footer, Epic,TabbarItem, Tabbar} from '@vkontakte/vkui';

import { Icon28MessageOutline, Icon28CrownOutline, Icon28UserCircleOutline, Icon28SchoolOutline
	} from '@vkontakte/icons';

const Profile = props =>{

	const [simple, setSimple] = useState('zero');
	const [data, getData] = useState([])
	const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=9';
  
	useEffect(() => {
		fetchData()
	}, [])
  
  
	const fetchData = () => {
		fetch(URL)
			.then((res) =>
				res.json())
  
			.then((response) => {
				console.log(response);
				getData(response);
			})
  
	}

	const [data1, getData1] = useState([])
	const URL1 = 'http://127.0.0.1:8000/persik/'+ props.id_p;

	useEffect(() => {
		fetchData1()
	}, [])


	const fetchData1 = () => {
		fetch(URL1)
			.then((res) =>
				res.json())

			.then((response) => {
				console.log(response);
				getData1(response);
			})

	}
		const [data2, getData2] = useState([])
	const URL2 = 'http://127.0.0.1:8000/persik/ex/'+ props.id_p;

	useEffect(() => {
		fetchData2()
	}, [])


	const fetchData2 = () => {
		fetch(URL2)
			.then((res) =>
				res.json())

			.then((response) => {
				console.log(response);
				getData2(response);
			})

	}
	return (
	<Panel id={props.id}>
		
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="persik"/>}
		>
				Профиль {props.id_p}
			
		</PanelHeader>
		{props.fetchedUser &&
		<Group >
			<Cell
				before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
				
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</Cell>
		</Group>}

<Group  header={<Header mode="secondary"><h1>Мои эксклюзивные Артефакты </h1></Header>}>
		<CardScroll size="m">

			<ContentCard

				src="https://cdnn1.ukraina.ru/img/07e6/0c/02/1041436899_0:206:2905:1840_1920x0_80_0_0_c7022893b761781d76fe592010d14bd2.jpg"
				alt="Picture of person's left hand with pink paint"
				header="Кот"
				text="Рыжий, пушистый"
				caption="Эту карточу нельзя выкупить"
				maxHeight={350}
				height={300}
				width={500}
				>
					<div style={{ paddingBottom: '42%' }} />
				</ContentCard>
				{data2.map((item, i) => (

				<ContentCard

				src={item.image_url}

				header={item.title}
				caption={<a> {item.current_income} ✧/мин. Эту карточу нельзя выкупить</a>}

				height={300}
				maxHeight={350}			  
				>
					<div style={{ paddingBottom: '42%' }} />
				</ContentCard>
				))}
				
			</CardScroll>
			</Group>
		<Group style={{paddingBottom: 50}} header={<Header mode="secondary"><h1>Мои Артефакты</h1></Header>}>
		<CardGrid size="m" >
				{data1.map((item, i) => (

				<ContentCard
				src={item.image_url}
onClick={a => {
					props.updateData1(item.id);
					console.log(item.id);
					props.go;
				  }}
				header={item.title}
				text={<a> {item.current_income} ✧/мин</a>}
				caption={ <Button onClick={props.go} data-to="buyartefact">  перейти</Button>}

				height={200}
				maxHeight={250}
				>
				</ContentCard>

				))}

				</CardGrid>

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

Profile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Profile;

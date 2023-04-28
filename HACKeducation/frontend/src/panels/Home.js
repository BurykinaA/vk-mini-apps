import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import persik from '../img/persik.png';
import axios from 'axios';

import bridge from '@vkontakte/vk-bridge';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, AdaptivityProvider,
	ConfigProvider,
	AppRoot,
	SplitLayout,
	SplitCol,
	View,
	SimpleCell,
	CardScroll,
	Card,
	CardGrid,
	ContentCard,
	ButtonGroup,
	Footer, Epic,TabbarItem, Tabbar

				} from '@vkontakte/vkui';

				import { Icon28MessageOutline, Icon28CrownOutline, Icon28UserCircleOutline, Icon28SchoolOutline
				} from '@vkontakte/icons';
const Home = ({ id, go, fetchedUser }) =>{

	
 //
  const userName = fetchedUser ? `${fetchedUser.first_name} ${fetchedUser.last_name}` : null;
 // const userID = fetchedUser ? `${fetchedUser.id} ` : null;
 //
 const userPhoto = fetchedUser ? `${fetchedUser.photo_200} ` : null;

	const [simple, setSimple] = useState('one');

	const [dataa, getDataa] = useState([])
	const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

	useEffect(() => {
		fetchDataa()
	}, [])


	const fetchDataa = () => {
		fetch(URL)
			.then((res) =>
				res.json())

			.then((response) => {
				console.log(response);
				getDataa(response);
			})

	}
	const [data1, getData1] = useState([])
	const URL1 = 'http://127.0.0.1:8000/';

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

	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);

	  // useEffect(() => {
	  //
		// const fetchData = async () => {
		//   const result = await axios.post('http://localhost:8000/api/data', {name: 'll', hh : 'ecer',user_id: user.id});
		//   console.log('!!!!!!!!!!!!!!!!!')
	  //
		//   setData(result.config.data);
		//   console.log(result)
		// };
		// fetchData();
	  // }, []);

  const [userId, setUserId] = useState(null);
	    useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUserId(user);

      const response = await fetch('http://127.0.0.1:8000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.id , name: user.first_name, surname: user.last_name})
      });

      const data = await response.json();
	  console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(data);
	  setData(data);
    }
    fetchData();
  }, []);


const [userId1, setUserId1] = useState(null);
	    useEffect(() => {
    async function fetchData1() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUserId1(user);

      const response = await fetch('http://127.0.0.1:8000/api/data/ex', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: user.id , name: user.first_name, surname: user.last_name})
      });

      const data = await response.json();
	  console.log("!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(data);
	  setData2(data);
    }
    fetchData1();
  }, []);

	return (
	<Panel id={id}>
		<PanelHeader>Name</PanelHeader>

		<Group >
			<Cell
				before={userPhoto ? <Avatar src={userPhoto}/> : null}

			>
				{userName}
			</Cell>
		</Group>
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
				{data2.map((item, i) => {

					return(
				<ContentCard
				
				src={item.image_url}

				header={item.title}
				text={item.text}
				caption={<a> {item.current_income} ✧/мин. Эту карточу нельзя выкупить</a>}

				height={300}
				maxHeight={350}			  
				>
					<div style={{ paddingBottom: '42%' }} />
				</ContentCard>
				)})}
				
			</CardScroll>
			</Group>
		<Group style={{paddingBottom: 50}} header={<Header mode="secondary"><h1>Мои Артефакты</h1></Header>}>
		<CardGrid size="m" >
{console.log("data")}
			{console.log(data)}
				{data.map((item, i) => (

				<ContentCard
				src={item.image_url}

				header={item.title}
				text={item.text}
				caption={<a> {item.current_income} ✧/мин</a>}
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
				  onClick={go} data-to="home"
                >
					 <Icon28UserCircleOutline />
                </TabbarItem>
                <TabbarItem
				 selected={simple === 'two'}
                  text="Музеи"
				  onClick={go} data-to="museums"
                >
					<Icon28SchoolOutline/>
                </TabbarItem>
                <TabbarItem
                  text="Рейтинг"
				  selected={simple === 'three'}
				  onClick={go} data-to="persik"
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

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
	
};

export default Home;

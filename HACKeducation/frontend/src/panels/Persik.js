import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

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
	ContentCard, Footer, Epic,TabbarItem, Tabbar, List, } from '@vkontakte/vkui';
	import { Icon28MessageOutline, Icon28CrownOutline, Icon28UserCircleOutline, Icon28SchoolOutline
	} from '@vkontakte/icons';
import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => {

	const [simple, setSimple] = useState('three');

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
	const URL1 = 'http://127.0.0.1:8000/persik';

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
	return(
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Рейтинг
		</PanelHeader>
		
		<Group header={<Header mode="secondary"><h1>Общий рейтинг</h1></Header>}>
          <table style={{width:'100%'}}>
			  <thead>
			  <tr>
				  <th>№</th>
				   <th>Имя</th>
				   <th>✧</th>
				   <th>артефакты</th>
				   <th>✧/мин</th>
				  <th>Аккаунт</th>

			  </tr>
			  </thead>
<tbody>
 {data1.map((item) => (
	 <tr onClick={a => {
				props.updateData2(item.id);
				props.go;
			  }}>
				  <th>{item.num}</th>
				   <th>{item.name} {item.surname}</th>
				   <th>{item.artcoins}</th>
				   <th> {item.artefacts_count}</th>
				   <th>{item.artcoins_count_per_min}</th>
				  <th><div>
					  <IconButton style={{marginLeft:'35%'}} onClick={props.go} data-to="profile">
				  <Icon28UserCircleOutline/>
				</IconButton>
					  </div>
				  </th>

			  </tr >

            ))}
</tbody>

          </table>
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
);
}
Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;

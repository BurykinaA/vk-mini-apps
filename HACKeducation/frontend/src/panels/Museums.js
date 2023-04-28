import React, { useEffect , useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import persik from '../img/persik.png';

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
	Footer, Epic,TabbarItem, Tabbar} from '@vkontakte/vkui';

	import { Icon28MessageOutline, Icon28CrownOutline, Icon28UserCircleOutline, Icon28SchoolOutline
	} from '@vkontakte/icons';
const Museums = props =>{

	const [simple, setSimple] = useState('two');
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
	const URL1 = 'http://127.0.0.1:8000/api/museum';

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
	 
	return (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>Музеи</PanelHeader>
		<br/>
		<Group header={<Header mode="secondary"><h1>Музеи</h1></Header>}>
			<CardScroll size="m">

				{data1.map((item, i) => {
					const f1 = a  => {
						props.updateData(item.id)
						console.log(item.id)
						props.go
					}
					return(
					
				<ContentCard
				onClick={a => {
					props.updateData(item.id);
					console.log(item.id);
					props.go;
				  }}
				  
				data-to="museum"
				src={item.image_url}
				header={item.name}
				
				text={item.description}
				caption={ <Button onClick={props.go} data-to="museum">  перейти</Button>}
				height={300}
				maxHeight={350}			  
				>
					<div style={{ paddingBottom: '42%' }} />
				</ContentCard>
				)})
				}
				
			</CardScroll>
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

Museums.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Museums;

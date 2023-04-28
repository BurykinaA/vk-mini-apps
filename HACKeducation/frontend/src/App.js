import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Museums from './panels/Museums';
import Museum from './panels/Museum';
import Profile from './panels/Profile';
import BuyArtefact from './panels/BuyArtefact';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	
	const [state, setState] = useState('1');

	const updateData = (value) => {
		setState(value)
		
	  }
	  const [state1, setState1] = useState('1');

 const updateData1 = (value) => {
  setState1(value)
   }
   const [state2, setState2] = useState('1');

   const updateData2 = (value) => {
    setState2(value)
  }

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
		
	};
	
	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' updateData2={updateData2} go={go} />
								<Museums id='museums' updateData={updateData}  id_m={state} go={go} />
								<Museum id='museum'  updateData1={updateData1} id_m={state} go={go} />
								<Profile id='profile' updateData1={updateData1} id_p={state2} go={go} />
								<BuyArtefact id='buyartefact' id_a={state1} go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

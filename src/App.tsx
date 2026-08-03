import '@mantine/core/styles.css';
import './App.css';
import { useState } from 'react';
import LetsPlayPoker from './containers/LetsPlayPoker';
import NavDrawer from './containers/NavDrawer';
import VpipCalculator from './containers/vpip-calculator/VpipCalculator';
import { createTheme, MantineProvider, ColorSchemeScript, AppShell, Burger, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PokerChipIcon } from '@phosphor-icons/react';

const theme = createTheme({
    fontFamily: '"Courier Prime", "Cutive Mono", "American Typewriter", "Courier New", monospace',
	primaryColor: 'orange',
	focusRing: 'never',
	autoContrast: true,
  	luminanceThreshold: 0.3,
});


function AppContent() {
	
	const headerHeight = 50;
	
	const [opened, { close, toggle }] = useDisclosure();
	
	const [activeTab, setActiveTab] = useState('vpip');
	
	// read only hook for check of current colour scheme: useComputedColorScheme
	const computedColorScheme = useComputedColorScheme('light');

	function mainContent() {
		switch(activeTab) {
			case 'poker':
				return <LetsPlayPoker/>;
			case 'sandbox':
				return <p>sandbox</p>;
			case 'vpip':
				return <VpipCalculator/>;
			case 'settings':
				return <p>settings</p>;
		}
	}

	function handleNavSelection(tab: string) {
		setActiveTab(tab);
		close();
	}

	return (
		<AppShell header={{ height: headerHeight }}>
			<AppShell.Header className='header'>
				<div style={{display: 'flex', alignItems: 'center', maxWidth: '500px', height: headerHeight, marginLeft: 14}}>
					<Burger onClick={toggle} color={computedColorScheme === 'light' ? 'dark' : 'yellow'}/>
					<h1 style={{marginTop: '26px', marginLeft: 17, color: computedColorScheme === 'light' ? 'black' : 'orange'}}>
						P<PokerChipIcon size={22} style={{marginBottom: '3px'}}/>ker G<PokerChipIcon size={22} style={{marginBottom: '3px'}}/>blins</h1>
				</div>
			</AppShell.Header>
			<NavDrawer openState={opened} activeTab={activeTab} navFunction={handleNavSelection} closeFunction={close}/>
			<AppShell.Main>
				{mainContent()}
			</AppShell.Main>
		</AppShell>
	);
}

function App() {
	return (
		<>
            <ColorSchemeScript defaultColorScheme='auto' />
            <MantineProvider theme={theme} defaultColorScheme='auto'>
                <AppContent />
            </MantineProvider>
        </>
	)
}

export default App

import '@mantine/core/styles.css';
import './App.css';
import { useState } from 'react';
import LetsPlayPoker from './containers/LetsPlayPoker';
import NavDrawer from './containers/NavDrawer';
import { createTheme, MantineProvider, ColorSchemeScript, AppShell, Burger, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const theme = createTheme({
    fontFamily: '"Courier Prime", "Cutive Mono", "American Typewriter", "Courier New", monospace',
	primaryColor: 'yellow',
	focusRing: 'never',
	autoContrast: true,
  	luminanceThreshold: 0.3,
});


function AppContent() {
	
	const headerHeight = 50;
	
	const [opened, { close, toggle }] = useDisclosure();
	
	const [activeTab, setActiveTab] = useState('poker');
	
	// read only hook for check of current colour scheme: useComputedColorScheme
	const computedColorScheme = useComputedColorScheme('light');

	function mainContent() {
		switch(activeTab) {
			case 'poker':
				return <LetsPlayPoker/>;
			case 'sandbox':
				return <p>sandbox</p>;
			case 'vpip':
				return <p>vpip</p>;
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
				<div style={{display: 'flex', alignItems: 'center', maxWidth: '500px', height: headerHeight, marginLeft: 10}}>
					<Burger opened={opened} onClick={toggle} color={computedColorScheme === 'light' ? 'dark' : 'yellow'}/>
					<h1 style={{marginTop: '25px', marginLeft: 15, color: computedColorScheme === 'light' ? 'black' : 'orange'}}>Poker Goblins</h1>
				</div>
			</AppShell.Header>
				<NavDrawer openState={opened} activeTab={activeTab} navFunction={handleNavSelection}/>
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

import '@mantine/core/styles.css';
import './App.css';
import { useState } from 'react';
import LetsPlayPoker from './containers/LetsPlayPoker';
import { createTheme, MantineProvider, ColorSchemeScript, AppShell, Burger, Drawer, useComputedColorScheme, NavLink } from '@mantine/core';
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
			<Drawer opened={opened} onClose={close} title="Menu"size={250} withOverlay>
				<NavLink
					label='To The Flop'
					active={activeTab === 'poker'}
					onClick={() => handleNavSelection('poker')}
				/>
				<NavLink
					label='Sandbox'
					active={activeTab === 'sandbox'}
					onClick={() => handleNavSelection('sandbox')}
				/>
				<NavLink
					label='VPIP Calculator'
					active={activeTab === 'vpip'}
					onClick={() => handleNavSelection('vpip')}
				/>
				<NavLink
					label='Settings'
					active={activeTab === 'settings'}
					onClick={() => handleNavSelection('settings')}
				/>
				{/* settings needs to have mantine tabs !! */}
			</Drawer>
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

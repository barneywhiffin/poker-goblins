import '@mantine/core/styles.css';
import './App.css';
import LetsPlayPoker from './containers/LetsPlayPoker';
import { createTheme, MantineProvider, ColorSchemeScript, AppShell, Burger, Drawer, useComputedColorScheme } from '@mantine/core';
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

	// read only hook for check of current colour scheme: useComputedColorScheme
	const computedColorScheme = useComputedColorScheme('light');

	return (
		<AppShell header={{ height: headerHeight }}>
			<AppShell.Header className='header'>
				<div style={{display: 'flex', alignItems: 'center', maxWidth: '500px', height: headerHeight, marginLeft: 10}}>
					<Burger opened={opened} onClick={toggle} color={computedColorScheme === 'light' ? 'dark' : 'yellow'}/>
					<h1 style={{marginTop: '25px', marginLeft: 15, color: computedColorScheme === 'light' ? 'black' : 'orange'}}>Poker Goblins</h1>
				</div>
			</AppShell.Header>
			<Drawer opened={opened} onClose={close} title="Menu"size={250} withOverlay>
				<ul style={{listStyle: 'none'}}>
					<li>To The Flop</li>
					<li>Sandbox</li>
					<li>VPIP Calculator</li>
					<li>Settings</li>
				</ul>
			</Drawer>
			<AppShell.Main>
				<LetsPlayPoker/>
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

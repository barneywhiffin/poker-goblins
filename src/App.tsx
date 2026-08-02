import '@mantine/core/styles.css';
import './App.css';
import LetsPlayPoker from './containers/LetsPlayPoker';
import { createTheme, MantineProvider, AppShell, Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const theme = createTheme({
    fontFamily: '"Courier Prime", "Cutive Mono", "American Typewriter", "Courier New", monospace',
	primaryColor: 'dark',
	focusRing: 'never',
});


function App() {

	const headerHeight = 50;
	
	const [opened, { close, toggle }] = useDisclosure();

	return (
		<MantineProvider theme={theme}>
			<AppShell header={{ height: headerHeight }}>
				<AppShell.Header>
					<div style={{display: 'flex', alignItems: 'center', maxWidth: '500px', height: headerHeight, marginLeft: 10}}>
						<Burger opened={opened} onClick={toggle}/>
						<h1 style={{marginTop: '25px', marginLeft: 15}}>Poker Goblins</h1>
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

		</MantineProvider>
	);
}

export default App

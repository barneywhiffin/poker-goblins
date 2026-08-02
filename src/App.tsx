import '@mantine/core/styles.css';
import './App.css';
import LetsPlayPoker from './containers/LetsPlayPoker';
import { createTheme, MantineProvider, AppShell } from '@mantine/core';
import {  PokerChipIcon } from '@phosphor-icons/react';

const theme = createTheme({
    fontFamily: '"Courier Prime", "Cutive Mono", "American Typewriter", "Courier New", monospace',
	primaryColor: 'pink',
});

function App() {

	return (
		<MantineProvider theme={theme}>
			<AppShell header={{ height: 85 }}>
				<AppShell.Header>
					<h1>
						<PokerChipIcon/>  Poker Goblins  <PokerChipIcon/>
					</h1>
				</AppShell.Header>
				<AppShell.Main>
					<LetsPlayPoker/>
				</AppShell.Main>
			</AppShell>

		</MantineProvider>
	);
}

export default App

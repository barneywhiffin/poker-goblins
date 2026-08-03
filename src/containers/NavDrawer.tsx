import { Drawer, NavLink } from '@mantine/core';

interface NavDrawerProps {
  openState: boolean;
  activeTab: string;
  navFunction: (tab: string) => void;
}

export default function NavDrawer(props: NavDrawerProps) {
    return (
        <Drawer opened={props.openState} onClose={close} title="Menu"size={250} withOverlay>
            <NavLink
                label='To The Flop'
                active={props.activeTab === 'poker'}
                onClick={() => props.navFunction('poker')}
            />
            <NavLink
                label='Sandbox'
                active={props.activeTab === 'sandbox'}
                onClick={() => props.navFunction('sandbox')}
            />
            <NavLink
                label='VPIP Calculator'
                active={props.activeTab === 'vpip'}
                onClick={() => props.navFunction('vpip')}
            />
            <NavLink
                label='Settings'
                active={props.activeTab === 'settings'}
                onClick={() => props.navFunction('settings')}
            />
            {/* settings needs to have mantine tabs !! */}
        </Drawer>
    )
}
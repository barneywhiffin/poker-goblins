import type { ControlButtonsProps } from '../types/ControlButtonsProps';
import { Button } from '@mantine/core';
import { PlayIcon, FastForwardIcon, SkipForwardIcon, StopIcon } from '@phosphor-icons/react';

export default function ControlButtons(props: ControlButtonsProps) {

    return (
        <Button.Group orientation="vertical" style={{margin: '20px 0 0 265px', height: 250, width: 250}}>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='1'
                rightSection={<PlayIcon/>}
                onClick={props.newRound}>
                New Round
            </Button>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='2'
                rightSection={<FastForwardIcon/>} 
                onClick={props.toTheFlop}>
                To The Flop
            </Button>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='3'
                rightSection={<FastForwardIcon/>} 
                onClick={props.toTheTurn}>
                To The Turn
            </Button>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='4'
                rightSection={<FastForwardIcon/>} 
                onClick={props.toTheRiver}>
                To The River
            </Button>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='5'
                rightSection={<SkipForwardIcon/>} 
                onClick={props.showdown}>
                Showdown
            </Button>
            <Button 
                size="md" 
                style={{transform: 'none'}}
                justify='space-between'
                variant="gradient" 
                gradient={{ from: 'pink', to: 'red', deg: 90 }}
                leftSection='6'
                rightSection={<StopIcon/>} 
                onClick={props.reset}>
                Reset Board
            </Button>
        </Button.Group>
    );
}
import image from './assets/image.png'
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./classes/block";

const text = `
Крутые видео и уроки по JavaScript тут: 
<a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`

const columnsValue = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing.',
]


export const model = [
    new TitleBlock('Constructor Site Pure jS!!!!', {
        tag: 'h2',
        styles: {
            background: ' linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: ''
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock(columnsValue, {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
]

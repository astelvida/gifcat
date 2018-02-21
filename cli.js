#!/usr/bin/env node
'use strict';

const meow = require('meow');
const textToGif = require('./index.js');

const cli = meow(
    `
        Express yourself with gifs from text on the command line

        Usage
        $  gifcat <text> - translate text to gif (random gif if no text)
    
        Options
        --clip              Copy link to clipboard
        --sticker           Get a sticker gif
        --party             Move quickly over giphs 
        --file [filePath]   Save locally to file [Default: <text>.gif]
        --size [npx|n%|n]   Set image size in based on height [Default: 200px]

        Examples
        $ gifcat 'psychedelic pizza'
        $ gifcat 'facepalm' --clip --file
        $ gifcat 'can you tell' --file=./icantell.gif
        $ gifcat 'omg' --sticker --size=50%
    `,
    {
        flags: {
            clip: {
                type: 'boolean',
                default: false,
            },
            sticker: {
                type: 'boolean',
                default: false
            },
            party: {
                type: 'boolean',
                default: false
            },
            size: {
                type: 'string',
                default: '200px'
            },
            file: {
                type: 'string',
                default: null
            }
        }
    }
);

textToGif(cli.input[0], cli.flags);

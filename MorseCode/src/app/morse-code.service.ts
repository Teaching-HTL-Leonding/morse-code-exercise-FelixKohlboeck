import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MorseCodeService {

  private morseCode: string[] = [
    /* A */ '.-',   /* B */ '-...', /* C */ '-.-.', /* D */ '-..',
    /* E */ '.',    /* F */ '..-.', /* G */ '--.',  /* H */ '....',
    /* I */ '..',   /* J */ '.---', /* K */ '-.-',  /* L */ '.-..',
    /* M */ '--',   /* N */ '-.',   /* O */ '---',  /* P */ '.--.',
    /* Q */ '--.-', /* R */ '.-.',  /* S */ '...',  /* T */ '-',
    /* U */ '..-',  /* V */ '...-', /* W */ '.--',  /* X */ '-..-',
    /* Y */ '-.--', /* Z */ '--..'
  ];

  private alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor() { }

  translateToText(input: string): string {
    const morseToLetterMap: { [key: string]: string } = {};

    this.morseCode.forEach((code, index) => {
      morseToLetterMap[code] = this.alphabet[index];
    });

    return input
      .split(' ')
      .map(code => {
        if (code === '/') {
          return ' ';
        } else {
          return morseToLetterMap[code] || '';
        }
      })
      .join('');
  }

  translateToMorse(input: string) {
    const letterToMorseMap: { [key: string]: string } = {};

    this.alphabet.forEach((letter, index) => {
      letterToMorseMap[letter] = this.morseCode[index];
    });

    return input
      .toUpperCase()
      .split('')
      .map(letter => {
        if (letter === ' ') {
          return '/';
        } else {
          return letterToMorseMap[letter] || '';
        }
      })
      .join(' ');
  }
}

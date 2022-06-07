/** @see https://github.com/knicklabs/lorem-ipsum.js#readme */

import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const sentence = lorem.generateSentences(1);
export const sentences = lorem.generateSentences(5);
export const paragraphs = lorem.generateParagraphs(7);

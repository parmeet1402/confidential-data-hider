const MASK_TEXT = 'XXXX';

const createBlocks = textContent => {
  let blocks = [];

  let arrIndex = 0;

  let newWord = '';
  while (arrIndex < textContent.length) {
    const ch = textContent[arrIndex];
    if (ch === `"`) {
      let j = arrIndex + 1;
      let splittedStr = '';
      while (textContent[j] !== `"`) {
        splittedStr += textContent[j];
        j++;
      }
      blocks.push(splittedStr.trim());
      arrIndex = j;
    } else if (ch === "'") {
      let j = arrIndex + 1;
      let splittedStr = '';
      while (textContent[j] !== `'`) {
        splittedStr += textContent[j];
        j++;
      }
      blocks.push(splittedStr.trim());
      arrIndex = j;
    } else {
      // if space or comma, then end a word if active,
      if (ch === ' ' || ch === ',') {
        if (newWord.length !== 0) {
          blocks.push(newWord.trim());
          newWord = '';
        }
      } else {
        newWord += ch;
      }
    }
    arrIndex++;
  }
  if (newWord.trim()) {
    blocks.push(newWord.trim());
  }
  return blocks;
};

const replaceOccurrencesWithMask = (fileContent, blocks) => {
  let processedText = fileContent;
  blocks.forEach(block => {
    const reg = new RegExp(`\\b${block}\\b`, 'ig');
    processedText = processedText.replace(reg, MASK_TEXT);
  });

  return processedText;
};

export const encryptFile = (fileContent, blockString) => {
  // create blocks out of blockString
  const blocks = createBlocks(blockString);

  // process these blocks to replace all the text items
  const processedText = replaceOccurrencesWithMask(fileContent, blocks);

  return processedText;
};

import { encryptFile } from './index';

test('should be empty when both file content and block string are empty strings', () => {
  const processedText = encryptFile('', '');
  expect(processedText).toEqual('');
});

test('should be empty when file content is empty string', () => {
  const processedText = encryptFile('', `Hello world "Boston Red Sox"`);
  expect(processedText).toEqual('');
});

test('should be same when block string is empty string', () => {
  const textContent = 'This is some text';
  const processedText = encryptFile(textContent, ``);
  expect(processedText).toEqual(textContent);
});

test('should be masked out string when comma-separated block string is passed', () => {
  const blockString = 'This, some';
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('XXXX is XXXX text');
});

test('should be masked out string when space-separated block string is passed', () => {
  const blockString = 'This some';
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('XXXX is XXXX text');
});

test('should be masked out string when comma-separated block string is passed with only phrases enclosed in single and double quotes', () => {
  const blockString = `"This is", 'some'`;
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('XXXX XXXX text');
});

test('should be masked out string when space-separated block string is passed with only phrases enclosed in single and double quotes', () => {
  const blockString = `"This is" 'some'`;
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('XXXX XXXX text');
});

test('should be masked out string when comma-separated block string is passed with phrases and words enclosed in quotes', () => {
  const blockString = `"is", 'some'`;
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('This XXXX XXXX text');
});

test('should be masked out string when space-separated block string is passed with only phrases and words enclosed in quotes', () => {
  const blockString = `"is" 'some'`;
  const processedText = encryptFile('This is some text', blockString);
  expect(processedText).toEqual('This XXXX XXXX text');
});

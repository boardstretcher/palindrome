const inputStr = document.querySelector('.input-str');
const outputStr = document.querySelector('.output-str');
const testPerformance = document.querySelector('.test-performance');

const findPalindromes = (str) => {
  const components = new Array;
  const formatStr = str.replace(/[^0-9a-z]/gi, '');

  for(let size = 2; size <= 3; ++size) {
    for(let pos = 0; pos <= formatStr.length - size; ++pos) {
        let subStrPos = pos;
        let subStrSize = size;

        while(subStrPos >= 0 && subStrSize <= formatStr.length - subStrPos) {
          const subStr = formatStr.substring(subStrPos, subStrPos + subStrSize);
          
          if(subStr.charAt(0) === subStr.charAt(subStr.length - 1)) {
            components.push(subStr);

            --subStrPos;
            subStrSize += 2;
          } else {
            break;
          }
       }
    }
  }
  
  return components;
};

inputStr.addEventListener('input', x => {
  const timerStart = performance.now();

  outputStr.innerText = findPalindromes(x.target.value)
    .map(x => x + ' ');
  
  const totalTime = performance.now() - timerStart;
  testPerformance.innerText = `Took ${totalTime} milliseconds to process.`;
});

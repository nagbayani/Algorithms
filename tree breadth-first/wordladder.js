import Queue from "../Queue.js";

function wordLadder(src, dest, words) {
  let wordset = new Set(words);
  let queue = new Queue();
  let counter = 0;
  if (!wordset.has(dest)) return 0;

  queue.enqueue(src);
  while (queue.length > 0) {
    counter++;
    for (let i = 0; i < queue.length; i++) {
      let curr = queue.dequeue();
      for (let j = 0; j < curr.length; i++) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        for (let k = 0; k < alphabet.length; k++) {
          let temp = curr;
          temp = temp.substring(0, j) + alphabet.charAt(k) + temp.substring(j + 1);
          
          if (temp === dest) {
            return counter + 1;
          }
          if (wordset.has(temp)) {
            queue.enqueue(temp);
            wordset.delete(temp);
          }
        }
      }
    }
  }

  return 0;
}

export { wordLadder };

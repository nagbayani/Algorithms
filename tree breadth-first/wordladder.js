import Queue from "../Queue.js";

function wordLadder(src, dest, words) {
  let wordset = new Set(words);
  let queue = new Queue();
  let counter = 0;
  if (!wordset.has(dest)) return 0;

  // add beginning word to queue
  queue.enqueue(src);

  // while queue is not empty
  while (queue.length > 0) {
    // increase counter
    counter++;

    // need to look at word in queue
    for (let i = 0; i < queue.length; i++) {
      let curr = queue.dequeue();

      // examine current word
      for (let j = 0; j < curr.length; j++) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";

        // compare all possibilities for current letter with alphabet
        for (let k = 0; k < alphabet.length; k++) {
          let temp = curr;
          // replace current letter with the comparison alphabet letter
          temp =
            temp.substring(0, j) + alphabet.charAt(k) + temp.substring(j + 1);

          // if we get a match in wordset, add new temp word to queue
          if (wordset.has(temp)) {
            queue.enqueue(temp);
            wordset.delete(temp);
          }

          // end condition, Output success
          if (temp === dest) {
            return counter + 1;
          }
        }
      }
    }
  }

  return 0;
}

export { wordLadder };

//parts of speach with words to make messages with
const noun = ['cat','dog','rat','fecal specamin','tranny', 'tweeker','swinger','pinapple', 'shoe', 'skateboard'];
const verb = ['ran', 'jumpped', 'vomited', 'swam','exploded','combusted','raced', 'twitched', 'injured','spoke'];
const adj = ['red', 'blue','green','big','small','wet', 'dry', 'angry','sad','dominant'];
const adv = ['slowly', 'quickly', 'modestly', 'truelly', 'decidedly', 'cutely', 'nastaly', 'crazily', 'naturally', 'generously']; 

const makeMessage = (noun, verb, adj, adv) => {
  const chooseRandomWord = (words) => {
    return words[Math.floor(Math.random() * words.length)];
  }
  return `The ${chooseRandomWord(adj)} ${chooseRandomWord(noun)} ${chooseRandomWord(verb)} ${chooseRandomWord(adv)}.`;
};

const makeThirtyMessages = () => {
  for (let i = 0; i <= 30; i++) {
    console.log(makeMessage(noun, verb, adj, adv));
  }
};

makeThirtyMessages();
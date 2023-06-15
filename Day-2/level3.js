// Level 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(str.match(/love/gi).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.match(/because/gi).length)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Remove special characters and symbols
const cleanedText = sentence.replace(/[^\w\s]/gi, '');

// Convert to lowercase and split into words
const words = cleanedText.toLowerCase().split(' ');

// Count word frequency
const wordFrequency = {};
let mostFrequentWord = '';
let highestFrequency = 0;

words.forEach(word => {
  if (word !== '') {
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }

    if (wordFrequency[word] > highestFrequency) {
      highestFrequency = wordFrequency[word];
      mostFrequentWord = word;
    }
  }
});

console.log('Most frequent word:', mostFrequentWord);
console.log('Frequency:', highestFrequency);

// Calculate the total annual income of the person by extracting the numbers from the following text. 
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let val = text.match(/\d+/g)
let income = 0;
for(let i=0; i<val.length; i++){
income += parseInt(val[i])
}
console.log(income)

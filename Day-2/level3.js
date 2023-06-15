// Level 3

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(str.match(/love/gi).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let str = 'You cannot end a sentence with because because because is a conjunction';
console.log(str.match(/because/gi).length)


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

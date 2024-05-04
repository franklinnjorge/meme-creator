import memeMaker from '@erickwendel/meme-maker'

const options = {
  image: './img/dog.jpg',         // Required
  outfile: './img/wheres.png',  // Required
  topText: '- WHAT TIME IS NOW?',            // Required
  bottomText: 'GUESS',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));
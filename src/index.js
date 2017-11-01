function component() {
  var element = document.createElement('div');

  let test = ['dog', 'doge', 'doggy'];

  let text = test.map(animal => animal + '1')

  let wholeText = text.reduce((sum, animal) => sum + ' ' + animal, '');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'yeti', wholeText], ' ');

  return element;
}

document.body.appendChild(component());

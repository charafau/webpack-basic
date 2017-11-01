'use strict';

function component() {
    var element = document.createElement('div');

    var test = ['dog', 'doge', 'doggy'];

    var text = test.map(function (animal) {
        return animal + '1';
    });

    var wholeText = text.reduce(function (sum, animal) {
        return sum + ' ' + animal;
    }, '');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'yeti', wholeText], ' ');

    return element;
}

document.body.appendChild(component());
//# sourceMappingURL=index.js.map
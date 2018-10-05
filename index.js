
function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var guess = elements.guess.value;
    
    var answer = 7;

    var text = '';
    var color = '';

    
    if(guess == answer) {
        text = 'Correct!';
        color = 'correct';
    }
    else if(guess < answer - 3) {
        text = 'super too low!';
        color = 'super-low';
    }
    else if(guess < answer) {
        text = 'too low!';
        color = 'low';
    }
    else if(guess > answer + 3) {
        text = 'super too high!';
        color = 'super-high';
    }
    else {
        text = 'too high!';
        color = 'high';
    }

    var result = document.getElementById('result');
    result.textContent = text;
    result.className = color;
}



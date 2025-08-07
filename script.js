let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (buttonText === 'Ac') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if (buttonText === 'DE') {
            string = string.slice(0 , -1);
            document.querySelector('input').value = string;
        }
          else if (buttonText === '√') {
         string = Math.sqrt(eval(string)); 
         document.querySelector('input').value = string; 
        }

        else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    });
});

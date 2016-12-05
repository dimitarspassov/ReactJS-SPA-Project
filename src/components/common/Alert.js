import noty from 'noty';

function alert(type, text) {
    let alert =  noty({ 
              type: type, 
              text: text,
              theme: 'relax', 
              animation: {
                open: {height: 'toggle'}, 
                close: {height: 'toggle'}, 
                easing: 'swing',
                speed: 500
            }});
    return alert
}

export { alert };



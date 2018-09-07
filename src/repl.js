import fido from './fido.js';
import repl from 'repl';


var replServer = repl.start({ prompt: 'dog> '});//, eval: fido });


replServer.defineCommand("fido", {
    help: 'Give commands to fido [speak|sit|shake|rollover]',
    action(name) {
        this.clearBufferedCommand();
        console.log(fido.command(name)); 
        //console.log(`Hello, ${name}!`);
        this.displayPrompt();
    }
});


export default class Fido {

    static command(name) {
        if(name == "speak") {
            return this.speak();
        } else if(name == "sit") {
            return this.ssit();
        } else if(name == "shake") {
            return this.shake();
        } else if(name == "rollover") {
            return this.rollover();
        } else {
            return this.confusion();
        }
    }

    static sit() {
        return "" +
        " /\\_/\\ \n" +
        "'\\o o/'\n" +
        " { @ } /|\n" +
        " /'-'\\//\n" +
        "(_/-\\_)\n"; 
    }


    static speak() {
        return "" +
        "     |\\_/| \n" +                 
        "     | @ @   Woof! \n" +
        "     |   <>              _ \n" +  
        "     |  _/\\------____ ((| |)) \n" +
        "     |               `--' |  \n" +  
        " ____|_       ___|   |___.'  \n" +
        "/_/_____/____/_______|  \n";
    }

    static shake() {
        return "*fido sticks out a paw*";
    }

    static rollover() {
        return "*fido rolls over*";
    }

    static confusion() {
        return "*fido tilts head in confusion*";
    }
}
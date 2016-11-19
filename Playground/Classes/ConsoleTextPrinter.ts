import { TextPrinter } from '../Interfaces/TextPrinter'

class ConsoleTextPrinter implements TextPrinter {
    print(text: string) {
        console.log(text);
    }
}

export { ConsoleTextPrinter }
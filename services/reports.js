
import { nanoid } from 'nanoid'

export function createReport(terroristName = 'Muhammad — unknown last name', weapons, text)
 {
    if (typeof(terroristName) !== 'string') {
        terroristName = 'Muhammad — unknown last name';
    }
    let report = {
    id: nanoid(),
    terroristName: terroristName,
    weapons: weapons,
    text: text
}
    return report

 }


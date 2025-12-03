import input from 'analiza-sync';
import { database } from "../db/db.js";
import { createReport } from "../services/reports.js";
import { savingReport } from '../services/saving_report.js';
import { getAllReport, searchById } from '../services/get_report.js';
import { deletReportById } from '../services/delet_report.js';
import { inputLoop } from '../utils/input_loop.js';
import { updateReport } from '../services/update_report.js';

const namu = `1. Add a new intelligence report 
2. Show all reports 
3. Search report by ID 
4. Delete report by ID 
5. Edit report by ID 
0. Exit`



let flag = true
while (flag) {
    console.log(namu);
    let choice = input('yuor choice: ')
    switch (choice) {
        case '1':
            let id = input('id: ')
            let terroristName = input('terroristName: ')
            let weapons = input('weapons: ')
            let text = input('text: ')
            let report = createReport(id, terroristName, weapons.split(' '), text)
            savingReport(database, report)
            break;
        case '2':
            console.log(getAllReport(database));
            break;
        case '3':
            let id_search = input('id: ');
            console.log(searchById(database, id_search));
            break;
        case '4':
            let id_del = input('id: ');
            deletReportById(database, id_del)
            break;
        case '5':
            let num_up = parseInt(input('How many details would you like to update? '))
            let id_update = input('id: ');
            let updates = inputLoop(num_up)
            updateReport(database, id_update, updates)
            break;
        case '0':
            flag = false
            break;

        default:
            console.log('Syntax error');

            break;
    }
}
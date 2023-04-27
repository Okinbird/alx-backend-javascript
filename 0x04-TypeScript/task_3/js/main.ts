/// <reference path="crud.d.ts" />
import * as CRUD from "./crud";
import { RowID, RowElement, MiString } from "./interface";

const row: RowElement = { firstName: "Gillaume", lastName: "Salva" };
// create row with the data
const newRowID: RowID = CRUD.insertRow(row); // in newRowID store the random id returned by the JS function insertRow
const updateRow: RowElement = { age: 23, ...row };
// in a constant save data to update the id of newRowID with its new data
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

/*const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}
CRUD.deleteRow(125);
// Delete row id 125*/
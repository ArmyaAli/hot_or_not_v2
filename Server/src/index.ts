import * as path from 'path'

const filePath = path.resolve(__dirname, '../db/test.db')

let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(filePath);


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { CsvFileReader } from './CsvFileReader';
var MatchReader_1 = require("./MatchReader");
//import { ConsoleReport } from './reportTargets/ConsoleReport';
//import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
//import { HtmlReport } from './reportTargets/HtmlReport';
// //Create an object that satisfies the 'DataReader' interface
// const csvFileReader= new CsvFileReader('football.csv');
// //Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader= new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

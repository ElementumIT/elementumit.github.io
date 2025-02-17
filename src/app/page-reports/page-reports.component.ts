import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-page-reports',
  templateUrl: './page-reports.component.html',
  styleUrls: ['./page-reports.component.less']
})
export class PageReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  generateReport(data: any): void {
    const documentDefinition = this.getDocumentDefinition(data);
    pdfMake.createPdf(documentDefinition).download('report.pdf');
  }

  getDocumentDefinition(data: any): any {
    return {
      content: [
        { text: 'Report', style: 'header' },
        this.getTable(data)
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }

  getTable(data: any): any {
    return {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*'],
        body: [
          ['Column 1', 'Column 2', 'Column 3'],
          ...data.map((item: any) => [item.col1, item.col2, item.col3])
        ]
      }
    };
  }
}

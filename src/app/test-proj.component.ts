import { Component } from '@angular/core';
import filesaver = require('filesaver');

@Component({
  moduleId: module.id,
  selector: 'test-proj-app',
  templateUrl: 'test-proj.component.html',
  styleUrls: ['test-proj.component.css']
})
export class TestProjAppComponent {
  title = 'test-proj works!';

  saveTest(): void {
    filesaver.saveAs(new Blob([]), "test.txt");
  }
}

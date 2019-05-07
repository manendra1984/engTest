import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from './data.service';
import { Subscription, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  private subscription: Subscription;
  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.subscription = this.getPosts();
  }
  openDialog(obj): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  getPosts(): Subscription {

    return interval(10000)
      .pipe(
        startWith(0),
        switchMap(() => this.dataService.getPosts())
      )
      .subscribe((res: {}) => {
        {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = res;

        }
      },
        error => {
          console.log('There was an error while retrieving Posts !!!' + error);
        })
      ;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

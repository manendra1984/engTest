import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule, 
    MatSortModule, 
    HttpClientModule,
    MatDialogModule
  ],
 
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }

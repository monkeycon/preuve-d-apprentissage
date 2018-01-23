import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';

import { ProofComponent } from './proof.component';
import { ProofDialogComponent } from './proof-dialog.component';


@NgModule({
  declarations: [
    ProofComponent,
    ProofDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
  ],
  entryComponents: [
    ProofDialogComponent,
  ],
  exports: [
    ProofComponent,
  ],
  providers: [],
})
export class ProofModule { }
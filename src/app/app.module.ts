import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AltaAlumnosComponent } from './alumnos/alta-alumnos/alta-alumnos.component';

@NgModule({
	declarations: [ AppComponent, AltaAlumnosComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

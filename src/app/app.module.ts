import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashComponent } from './splash/splash.component';

const CREDENTIALS = {
	apiKey: 'AIzaSyAUp4HpskqbGMZuXmh2y4G_iASr6bDuEVU',
	authDomain: 'bookfriend-app.firebaseapp.com',
	databaseURL: 'https://bookfriend-app.firebaseio.com',
	projectId: 'bookfriend-app',
	storageBucket: '',
	messagingSenderId: '1055995931918',
	appId: '1:1055995931918:web:894c9fda6f053b92253b5f',
	measurementId: 'G-CTVLY5XWZL',
};

@NgModule({
	declarations: [
		AppComponent,
		SplashComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		AngularFireModule.initializeApp(CREDENTIALS),
		AngularFireAuthModule,
		AngularFirestoreModule],
	providers: [
		StatusBar,
		SplashScreen,
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		}],
	bootstrap: [AppComponent],
})
export class AppModule { }

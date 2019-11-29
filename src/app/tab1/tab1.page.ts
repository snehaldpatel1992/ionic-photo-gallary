import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(/*private firebaseAnalytics: FirebaseAnalytics*/) {
/*    this.firebaseAnalytics.logEvent('page_view', {page: 'tab1'})
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));*/
  }

}

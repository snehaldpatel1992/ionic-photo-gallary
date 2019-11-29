import { AfterViewInit, Component } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  constructor(private firebaseAnalytics: FirebaseAnalytics) {}

  ngAfterViewInit() {
    this.firebaseAnalytics.logEvent('select_content', {
      content_type: 'image',
      content_id: 'P12453',
      items: [{ name: 'Kittens' }]
    });
  }

}

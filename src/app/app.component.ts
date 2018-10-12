import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'beaconstour';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    function scrollToDownload() {

      if ($('.section-download').length !== 0) {
        $('html, body').animate({
          scrollTop: $('.section-download').offset().top
        }, 1000);
      }
    }
  }

  public CloseMenu() {
    $('.navbar-toggler').trigger('click');
  }

  public float() {
      const floatButton = document.getElementById('float-button'),
        floatmenu = document.getElementById('circular-menu');



          floatButton.classList.toggle('pulsed');
          floatmenu.classList.toggle('expand');
  }
}

import { Component, OnInit } from '@angular/core';
import { e } from '@angular/core/src/render3';
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

    // tslint:disable-next-line:no-shadowed-variable
    function capturarf5(e) {
      const code = (e.keyCode ? e.keyCode : e.which);
      if (code === 116) {
        location.href = '/';
      }
    }
    document.onkeydown = capturarf5;
  }

  public CloseMenu() {
    $('.navbar-toggler').trigger('click');
  }

}

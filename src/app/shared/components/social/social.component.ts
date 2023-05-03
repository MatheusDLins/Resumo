import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  @Input()
  linkGithub : string = '';
  @Input()
  nameGithub : string = ''

  @Input()
  linkLinkedin : string = '';
  @Input()
  nameLinkedin : string = ''

  @Input()
  linkPortfolio : string = '';
  @Input()
  namePortfolio : string = ''
}

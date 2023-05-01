import { Component} from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent {
  linkLinkedin : string = 'https://www.linkedin.com/in/matheus-duarte-4260771a2/';
  linkGithub : string = 'https://github.com/matheusDlins';
  linkPortfolio : string = 'https://matheusdlins.github.io/Portfolio/';
}

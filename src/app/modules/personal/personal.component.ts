import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.navigateToChild(fragment || '');
    });
  }

  private navigateToChild(child: string) {
    console.log("===");
    
    this.router.navigate(['detail']);
  }
}

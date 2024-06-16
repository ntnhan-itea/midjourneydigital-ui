import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigate-parent',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navigate-parent.component.html',
  styleUrl: './navigate-parent.component.scss',
})
export class NavigateParentComponent implements OnInit {
  readonly navigateComp = NavigateComp;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((firstChild) => {
      console.log({ firstChild });
    });

    this.route.params.subscribe((param) => {
      console.log('param in parent: ', param);
    });
  }

  redirectTo(navigateComp: NavigateComp) {
    switch (navigateComp) {
      case NavigateComp.CHILD1: {
        this.router.navigate(['child1', '789'], {
          relativeTo: this.route,
          fragment: 'thisIsFagment',
          queryParams: {
            id: 1,
            age: 20,
          },
        });
        break;
      }
      case NavigateComp.CHILD2: {
        this.router.navigate(['child2', '789'], {
          relativeTo: this.route,
        });
        break;
      }
    }
  }
}

enum NavigateComp {
  CHILD1 = 'child1',
  CHILD2 = 'child2',
}

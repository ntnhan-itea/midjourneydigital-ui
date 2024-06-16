import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigate-child1',
  standalone: true,
  imports: [],
  templateUrl: './navigate-child1.component.html',
  styleUrl: './navigate-child1.component.scss',
})
export class NavigateChild1Component implements OnInit {
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    //  this.route.params.subscribe(param => {
    //   console.log({param});
    //  })

    //  this.route.fragment.subscribe(fragment => {
    //   console.log({fragment});
    //  })

    //  this.route.queryParams.subscribe(queryParams => {
    //   console.log({queryParams});
    //  })

    //  this.route.parent?.params.subscribe(paramParent => {
    //   console.log({paramParent});
    //  })

    const paramsChild1 = this.route.snapshot.params;

    const fragmentChild1 = this.route.snapshot.fragment;

    const queryParamsChild1 = this.route.snapshot.queryParams;

    const parantParamsOfchild1 = this.route.parent?.snapshot.params;

    console.log(
      'child1: ',
      paramsChild1,
      fragmentChild1,
      queryParamsChild1,
      parantParamsOfchild1
    );
  }
}

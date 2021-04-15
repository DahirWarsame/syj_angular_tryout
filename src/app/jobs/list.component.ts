import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { JobService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    jobs = null;

    constructor(private jobService: JobService) {}

    ngOnInit() {
        this.jobService.getAll()
            .pipe(first())
            .subscribe(jobs => this.jobs = jobs);
    }
}
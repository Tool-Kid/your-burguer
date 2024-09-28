import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowNavigator } from '@workflow/domain/workflow-navigator';

export class NgWorkflowNavigator extends WorkflowNavigator {
  private router = inject(Router);

  public override next(): void {
    if (!this.state.hasNext()) {
      throw new Error(`Current workflow has no next step`);
    }
    this.state.next();
    const { path } = this.state.state.current.step;
    this.router.navigate([path]);
  }

  public override previous(): void {
    if (!this.state.hasPrevious()) {
      throw new Error(`Current workflow has no previous step`);
    }
    this.state.previous();
    const { path } = this.state.state.current.step;
    this.router.navigate([path]);
  }
}

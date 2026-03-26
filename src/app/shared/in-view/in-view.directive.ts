import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  @Input() inViewDelay = 0;
  @HostBinding('class.in-view') isInView = false;

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private timeoutId?: number;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      queueMicrotask(() => {
        this.isInView = true;
        this.cdr.markForCheck();
      });
      return;
    }

    this.observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || this.isInView) {
          return;
        }

        this.timeoutId = window.setTimeout(() => {
          this.isInView = true;
          this.cdr.markForCheck();
          this.observer?.disconnect();
        }, this.inViewDelay);
      },
      {
        threshold: 0.2,
      },
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.timeoutId !== undefined) {
      window.clearTimeout(this.timeoutId);
    }
  }
}

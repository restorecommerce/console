import { inject, Injectable } from '@angular/core';

import {
  NotifierPosition,
  NotifierService,
  NotifierOptions,
} from '@vcl/ng-vcl';

import {
  RS_NOTIFICATION_DEFAULTS,
  RS_NOTIFICATION_TRANSLATE,
  RsNotificationDefaults,
  RsNotificationTranslateFn,
  RsNotifierOptions,
} from './notification.tokens';

@Injectable({ providedIn: 'root' })
export class RsNotificationService {
  private readonly vclNotification = inject(NotifierService);

  private readonly defaults = inject(RS_NOTIFICATION_DEFAULTS, {
    optional: true,
  }) as RsNotificationDefaults | null;

  private readonly translateFn = inject(RS_NOTIFICATION_TRANSLATE, {
    optional: true,
  }) as RsNotificationTranslateFn | null;

  // ---------- helpers ----------

  private translate(
    key: string,
    params?: Record<string, unknown>,
    raw?: boolean
  ): string {
    if (raw || !this.translateFn) {
      // no translation wired or explicit raw -> treat as plain text
      return key;
    }
    return this.translateFn(key, params);
  }

  private mergeOptions(opts?: Partial<NotifierOptions>): NotifierOptions {
    const base: NotifierOptions = {
      position: this.defaults?.position ?? NotifierPosition.TopRight,
      timeout:
        typeof this.defaults?.timeout === 'undefined'
          ? 5000
          : this.defaults.timeout,
      showCloseButton: this.defaults?.showCloseButton ?? true,
      ...(opts ?? {}),
    } as NotifierOptions;

    return base;
  }

  private notify(
    method: 'info' | 'success' | 'warning' | 'error',
    text: string,
    opts?: RsNotifierOptions
  ): void {
    const { params, titleKey, raw, title, ...restOptions } = opts ?? {};

    const content = this.translate(text, params, raw);

    const resolvedTitle =
      titleKey != null ? this.translate(titleKey, params, raw) : title;

    const merged: NotifierOptions = this.mergeOptions({
      title: resolvedTitle,
      ...restOptions,
    });

    this.vclNotification[method]({ ...merged, content });
  }

  // ---------- public API (ONE interface for all) ----------

  info(text: string, opts?: RsNotifierOptions): void {
    this.notify('info', text, opts);
  }

  success(text: string, opts?: RsNotifierOptions): void {
    this.notify('success', text, opts);
  }

  warning(text: string, opts?: RsNotifierOptions): void {
    this.notify('warning', text, opts);
  }

  error(text: string, opts?: RsNotifierOptions): void {
    this.notify('error', text, opts);
  }
}

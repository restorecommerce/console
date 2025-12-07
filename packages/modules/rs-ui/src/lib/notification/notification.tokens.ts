import { InjectionToken } from '@angular/core';

import { NotifierOptions, NotifierPosition } from '@vcl/ng-vcl';

export interface RsNotificationDefaults {
  timeout?: number | false;
  position?: NotifierPosition;
  showCloseButton?: boolean;
  icon?: string;
}

export interface RsNotifierOptions extends NotifierOptions {
  /**
   * Interpolation params for the message key.
   * Example: { resource: 'Product' }
   */
  params?: Record<string, unknown>;

  /**
   * Optional i18n key for the title.
   * If provided, we translate it the same way as the content.
   */
  titleKey?: string;

  /**
   * If true, do NOT translate `text` – treat it as plain text.
   */
  raw?: boolean;
}

/**
 * Abstract translation function (host wires Transloco / ngx-translate / etc.).
 */
export type RsNotificationTranslateFn = (
  key: string,
  params?: Record<string, unknown>
) => string;

export const RS_NOTIFICATION_DEFAULTS =
  new InjectionToken<RsNotificationDefaults>('RS_NOTIFICATION_DEFAULTS');

export const RS_NOTIFICATION_TRANSLATE =
  new InjectionToken<RsNotificationTranslateFn>('RS_NOTIFICATION_TRANSLATE');

export enum EActionStatus {
  // Action initialize
  INIT = 'INIT',

  // Actions (asynchronous or not):
  LOADING = 'LOADING',
  REQUESTING = 'REQUESTING',
  SHOWING = 'SHOWING',
  CREATING = 'CREATING',
  UPDATING = 'UPDATING',
  DELETING = 'DELETING',
  CLEARING = 'CLEARING',

  // Actions results
  LOADED = 'LOADED',
  REQUESTED = 'REQUESTED',
  SHOWED = 'SHOWED',
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
  CLEARED = 'CLEARED',

  // Action generic results
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',

  // And finally done
  DONE = 'DONE',
}

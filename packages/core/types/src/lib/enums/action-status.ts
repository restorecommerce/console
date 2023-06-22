export enum EActionStatus {
  // Action initialize
  INIT = 'INIT',

  // Actions (asynchronous or not):
  LOADING = 'LOADING',
  REQUESTING = 'REQUESTING',
  CREATING = 'CREATING',
  UPDATING = 'UPDATING',
  DELETING = 'DELETING',

  // Actions results
  LOADED = 'LOADED',
  REQUESTED = 'REQUESTED',
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',

  // Action generic results
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',

  // And finally done
  DONE = 'DONE',
}

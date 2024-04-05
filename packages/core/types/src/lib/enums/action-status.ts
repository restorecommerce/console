export enum EActionStatus {
  // Action initialize
  INIT = 'INIT',

  // Actions (asynchronous or not):
  Loading = 'LOADING',
  Requesting = 'REQUESTING',
  Showing = 'SHOWING',
  Mutating = 'MUTATING',
  Creating = 'CREATING',
  Updating = 'UPDATING',
  Deleting = 'DELETING',
  Clearing = 'CLEARING',

  // Actions results
  Loaded = 'LOADED',
  Requested = 'REQUESTED',
  Showed = 'SHOWED',
  Mutated = 'MUTATED',
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
  Cleared = 'CLEARED',

  // Action generic results
  Succeeded = 'SUCCEEDED',
  Failed = 'FAILED',

  // And finally done
  Done = 'DONE',
}

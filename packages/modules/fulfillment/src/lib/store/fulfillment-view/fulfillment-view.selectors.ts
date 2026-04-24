import { createFeatureSelector, createSelector } from '@ngrx/store';

import { fulfillmentViewFeatureKey } from './fulfillment-view.reducer';
import { FulfillmentViewState } from './fulfillment-view.state';

export const selectFulfillmentViewState =
  createFeatureSelector<FulfillmentViewState>(fulfillmentViewFeatureKey);

export const selectFulfillment = createSelector(
  selectFulfillmentViewState,
  (state) => state.fulfillment
);

export const selectLoading = createSelector(
  selectFulfillmentViewState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectFulfillmentViewState,
  (state) => state.error
);

export const selectHasLabels = createSelector(
  selectFulfillment,
  (fulfillment) => {
    if (!fulfillment) {
      return false;
    }

    return fulfillment.parcels.some((parcel) => parcel.labelUrl);
  }
);

export const selectFulfillmentSubmissionState = createSelector(
  selectFulfillmentViewState,
  (state) => state.submission
);

export const selectIsSubmittingFulfillment = createSelector(
  selectFulfillmentSubmissionState,
  (submission) => submission.submitting
);

export const selectFulfillmentSubmitted = createSelector(
  selectFulfillmentSubmissionState,
  (submission) => submission.submitted
);

export const selectFulfillmentSubmissionError = createSelector(
  selectFulfillmentSubmissionState,
  (submission) => submission.error
);

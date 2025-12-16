"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EActionStatus = void 0;
var EActionStatus;
(function (EActionStatus) {
    // Action initialize
    EActionStatus["INIT"] = "INIT";
    // Actions (asynchronous or not):
    EActionStatus["Loading"] = "LOADING";
    EActionStatus["Requesting"] = "REQUESTING";
    EActionStatus["Showing"] = "SHOWING";
    EActionStatus["Mutating"] = "MUTATING";
    EActionStatus["Creating"] = "CREATING";
    EActionStatus["Updating"] = "UPDATING";
    EActionStatus["Deleting"] = "DELETING";
    EActionStatus["Clearing"] = "CLEARING";
    // Actions results
    EActionStatus["Loaded"] = "LOADED";
    EActionStatus["Requested"] = "REQUESTED";
    EActionStatus["Showed"] = "SHOWED";
    EActionStatus["Mutated"] = "MUTATED";
    EActionStatus["Created"] = "CREATED";
    EActionStatus["Updated"] = "UPDATED";
    EActionStatus["Deleted"] = "DELETED";
    EActionStatus["Cleared"] = "CLEARED";
    // Action generic results
    EActionStatus["Succeeded"] = "SUCCEEDED";
    EActionStatus["Failed"] = "FAILED";
    // And finally done
    EActionStatus["Done"] = "DONE";
})(EActionStatus || (exports.EActionStatus = EActionStatus = {}));
//# sourceMappingURL=action-status.js.map
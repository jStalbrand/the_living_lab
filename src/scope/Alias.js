//------------------------------------------------------------------------------
// Global scope aliases
//------------------------------------------------------------------------------

/**
 * Exports the application to the global scope.
 */
if (typeof window !== "undefined") {
    if (typeof window.theLivingLab === "undefined") {
        window.theLivingLab = theLivingLab;
    }
}
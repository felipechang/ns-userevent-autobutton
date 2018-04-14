define([], function () {

    /**
     * Boilerplate used to easily add an executable button to a form.
     *
     * @author Felipe Chang <felipechang@hardcake.org>
     *
     * @NApiVersion 2.x
     * @NModuleScope SameAccount
     * @NScriptType UserEventScript
     */

    function func() {
        require(["N/currentRecord"], function (currentRecord) {

            var record = currentRecord.get();

            //Write the client script here....


        });
    }

    return {

        /**
         * beforeLoad event handler.
         * @param {Object} context
         * @param {Record} context.newRecord - The new record being loaded
         * @param {string} context.type - The action type that triggered this event
         * @param {Form} context.form - The current UI form
         * @return {void}
         */
        beforeLoad: function (context) {
            context.form.addButton({
                id: "custpage_button",
                label: "Button Name",
                functionName: "(" + func.toString() + ")"
            });
        }
    };
});
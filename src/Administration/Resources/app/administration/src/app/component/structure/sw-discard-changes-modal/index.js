import template from './sw-discard-changes-modal.html.twig';

const { Component } = Shopware;

/**
 * @package admin
 *
 * @public
 * @description
 * A modal that prompts the user if he wants to leave a detail page with unsaved changes.
 * @status ready
 * @example-type static
 * @see sw-category-detail
 * @component-example
 *  <sw-discard-changes-modal v-if="showDiscardChangesModal" @keep-editing="keepEditing" @discard-changes="discardChanges">
 *  </sw-discard-changes-modal>
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Component.register('sw-discard-changes-modal', {
    template,

    methods: {
        keepEditing() {
            this.$emit('keep-editing');
        },

        discardChanges() {
            this.$emit('discard-changes');
        },
    },
});

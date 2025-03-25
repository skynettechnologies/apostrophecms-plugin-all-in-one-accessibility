export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'All in One Accessibility',
  },
  async init(self) {
    self.apos.template.append('head', 'apostrophecms-all-in-one-accessibility:scriptTag');
    self.addManagerModal();
    self.addToAdminBar();
  },
  methods(self) {
    return {
      addManagerModal() {
        self.apos.modal.add(
          `apostrophecms-all-in-one-accessibility`,
          self.getComponentName('managerModal', 'AllInOneAccessibilitySettings'),
          { moduleName: 'AllInOneAccessibilitySettings' }
        );
      },
      addToAdminBar() {
        self.apos.adminBar.add(
          `apostrophecms-all-in-one-accessibility`,
          'All in One Accessibility',
          false,
        );
      },
    }
  },
  components(self) {
    return {
      async scriptTag(req) {
        const settings = await self.apos.doc.db.findOne({
          type: 'apostrophecms-all-in-one-accessibility-settings'
        });
        return '';
      }
    };
  }
};

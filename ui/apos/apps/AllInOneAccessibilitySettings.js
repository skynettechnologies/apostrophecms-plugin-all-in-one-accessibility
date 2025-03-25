
export default () => {
    apos.bus.$on('admin-menu-click', async (name) => {
      if (name !== 'AllInOneAccessibilitySettings') {
        return;
      }
    });
  };
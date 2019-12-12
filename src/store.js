export default {
    state: {
        isPageTransitioning: false,
        isMenuOpen: true,
        isBootFromIndex: false,
        didBootTimeTable: false,
    },
    openMenu() {
        this.state.isMenuOpen = true;
    },
    closeMenu() {
        this.state.isMenuOpen = false;
    },
    bootFromIndex() {
        this.state.isBootFromIndex = true;
    },
    unBoot() {
        this.state.isBootFromIndex = false;
    },
    bootTimeTable() {
        this.state.didBootTimeTable = true;
    },
    unBootTimeTable() {
        this.state.didBootTimeTable = false;
    }
}
const state = {
    data: {
        menus: [
            {
                id: 1,
                label: "Dashboard",
                icon: "ti-dashboard",
                name: "dashboard",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 2,
                label: "Concierge",
                icon: "ti-users",
                name: "concierge",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 3,
                label: "Masterfile",
                icon: "ti-users-group",
                name: "masterfile",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 4,
                label: "Reports",
                icon: "ti-file-text",
                name: "report",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 5,
                label: "Settings",
                icon: "ti-settings",
                name: "home",
                subMenu: [
                    { label: "Physicians", name: "physicians", icon: "fa-solid fa-user-doctor" },
                    { label: "Users", name: "users", icon: "ti ti-user-plus" },
                ],
                isToggled: false,
            },
        ]
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    getMenus: state => state.data.menus
}

export default {
    state,
    mutations,
    actions,
    getters
}
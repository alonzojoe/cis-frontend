const state = {
    data: {
        menus: [
            {
                id: 1,
                label: "Dashboard",
                icon: "ti ti-dashboard",
                name: "dashboard",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 2,
                label: "Patient Concierge",
                icon: "ti ti-users",
                name: "concierge",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 3,
                label: "Patient Master File",
                icon: "ti ti-users-group",
                name: "masterfile",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 4,
                label: "Report Generation",
                icon: "ti ti-file-text",
                name: "report",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 5,
                label: "Physicians",
                icon: "ti ti-stethoscope",
                name: "physicians",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 6,
                label: "Users",
                icon: "ti ti-user-plus",
                name: "users",
                subMenu: [],
                isToggled: false,
            },
            // {
            //     id: 5,
            //     label: "Settings",
            //     icon: "ti-settings",
            //     name: "settings",
            //     subMenu: [
            //         { label: "Physicians", name: "physicians", icon: "fa-solid fa-user-doctor" },
            //         { label: "Users", name: "users", icon: "ti ti-user-plus" },
            //     ],
            //     isToggled: false,
            // },

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
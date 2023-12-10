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
                icon: "ti-smart-home",
                name: "home",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 3,
                label: "Masterfile",
                icon: "ti-smart-home",
                name: "home",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 4,
                label: "Reports",
                icon: "ti-smart-home",
                name: "home",
                subMenu: [],
                isToggled: false,
            },
            {
                id: 5,
                label: "Settings",
                icon: "ti-smart-home",
                name: "home",
                subMenu: [
                    { label: "Physicians", name: "physicians" },
                    { label: "Users", name: "users" },
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

}

export default {
    state,
    mutations,
    actions,
    getters
}
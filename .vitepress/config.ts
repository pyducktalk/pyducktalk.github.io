import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: '可达鸭の典籍',
    description: '',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png',
        }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/pyducktalk/pyducktalk.github.io/' },
        ],
        editLink: {
            pattern: 'https://github.com/pyducktalk/pyducktalk.github.io/tree/master/:path',
            text: '在 Github 编辑',
        },

        outline: [2, 3],

        // footer: {
        //     message: '吃好喝好',
        //     // copyright: 'Copyright © 2023-present Augus'
        // },
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '主题色切换',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        outlineTitle: '本页内容',

    },
})

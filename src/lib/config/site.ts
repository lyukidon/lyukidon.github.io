import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'lyukidon.github.io',
  title: 'Home',
  subtitle: 'Ryu Kidon Blog',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '',
    name: 'Ryu Kidon',
    status: '😃',
    bio: 'Javascript Developer'
  },
  themeColor: '#3D4451'
}

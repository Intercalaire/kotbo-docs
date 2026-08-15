import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.kotbo.fr',
  integrations: [
    starlight({
      title: 'Kotbo Docs',
      description: 'Le guide utilisateur officiel du dashboard Kotbo.',
      logo: {
        src: './src/assets/kotbo-logo.svg',
        alt: 'Kotbo',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr-FR',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Kotbo-Bot/kotbo-docs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Kotbo-Bot/kotbo-docs/edit/main/',
      },
      customCss: ['./src/styles/css.rooting.css'],
      sidebar: [
        {
          label: 'Bien démarrer',
          translations: { en: 'Getting started' },
          items: [
            {
              label: 'Connexion & serveur',
              translations: { en: 'Sign in & server' },
              slug: 'premiers-pas/connexion',
            },
            {
              label: 'Prendre en main le dashboard',
              translations: { en: 'Find your way around' },
              slug: 'premiers-pas/interface',
            },
            {
              label: 'Activer ses modules',
              translations: { en: 'Enable your modules' },
              slug: 'premiers-pas/modules',
            },
            {
              label: 'Ordre de configuration',
              translations: { en: 'Setup order' },
              slug: 'premiers-pas/configuration-ordre',
            },
          ],
        },
        {
          label: 'Configuration (Dashboard)',
          translations: { en: 'Configuration (Dashboard)' },
          items: [
            {
              label: 'Modération',
              translations: { en: 'Moderation' },
              items: [
                {
                  label: 'Modération automatique',
                  translations: { en: 'Auto moderation' },
                  slug: 'dashboard/moderation/automod',
                },
                {
                  label: 'Doubles comptes',
                  translations: { en: 'Alt accounts' },
                  slug: 'dashboard/moderation/double-comptes',
                },
                {
                  label: 'Appels de bannissement',
                  translations: { en: 'Ban appeals' },
                  slug: 'dashboard/moderation/appels-ban',
                },
              ],
            },
            {
              label: 'Communauté',
              translations: { en: 'Community' },
              items: [
                {
                  label: 'Messages d’accueil & départ',
                  translations: { en: 'Welcome & leave messages' },
                  slug: 'dashboard/communaute/accueil-depart',
                },
                {
                  label: 'Lier des salons',
                  translations: { en: 'Channel links' },
                  slug: 'dashboard/communaute/liens-salons',
                },
                {
                  label: 'Suggestions',
                  translations: { en: 'Suggestions' },
                  slug: 'dashboard/communaute/suggestions',
                },
                {
                  label: 'Salons Fun',
                  translations: { en: 'Fun channels' },
                  slug: 'dashboard/communaute/salons-fun',
                },
                {
                  label: 'Tickets de support',
                  translations: { en: 'Support tickets' },
                  slug: 'dashboard/communaute/tickets',
                },
                {
                  label: 'Daily Algo',
                  translations: { en: 'Daily Algo' },
                  slug: 'dashboard/communaute/daily-algo',
                },
                {
                  label: 'Formulaires & Style Custom',
                  translations: { en: 'Forms & custom styling' },
                  slug: 'dashboard/communaute/formulaires',
                },
              ],
            },
            {
              label: 'Configuration',
              translations: { en: 'Configuration' },
              items: [
                {
                  label: 'Salons',
                  translations: { en: 'Channels' },
                  slug: 'dashboard/configuration/salons',
                },
                {
                  label: 'Accès aux commandes',
                  translations: { en: 'Command access' },
                  slug: 'dashboard/configuration/commandes',
                },
              ],
            },
          ],
        },
        {
          label: 'Utilisation & Commandes (Discord)',
          translations: { en: 'Usage & commands (Discord)' },
          items: [
            {
              label: 'Modération',
              translations: { en: 'Moderation' },
              items: [
                {
                  label: 'Modération automatique',
                  translations: { en: 'Auto moderation' },
                  slug: 'discord/moderation/automod',
                },
                {
                  label: 'Doubles comptes',
                  translations: { en: 'Alt accounts' },
                  slug: 'discord/moderation/double-comptes',
                },
              ],
            },
            {
              label: 'Communauté',
              translations: { en: 'Community' },
              items: [
                {
                  label: 'Messages d’accueil & départ',
                  translations: { en: 'Welcome & leave messages' },
                  slug: 'discord/communaute/accueil-depart',
                },
                {
                  label: 'Lier des salons',
                  translations: { en: 'Channel links' },
                  slug: 'discord/communaute/liens-salons',
                },
                {
                  label: 'Suggestions',
                  translations: { en: 'Suggestions' },
                  slug: 'discord/communaute/suggestions',
                },
                {
                  label: 'Salons Fun',
                  translations: { en: 'Fun channels' },
                  slug: 'discord/communaute/salons-fun',
                },
                {
                  label: 'Tickets de support',
                  translations: { en: 'Support tickets' },
                  slug: 'discord/communaute/tickets',
                },
                {
                  label: 'Daily Algo',
                  translations: { en: 'Daily Algo' },
                  slug: 'discord/communaute/daily-algo',
                },
              ],
            },
            {
              label: 'Configuration',
              translations: { en: 'Configuration' },
              items: [
                {
                  label: 'Salons',
                  translations: { en: 'Channels' },
                  slug: 'discord/configuration/salons',
                },
                {
                  label: 'Accès aux commandes',
                  translations: { en: 'Command access' },
                  slug: 'discord/configuration/commandes',
                },
              ],
            },
          ],
        },
        {
          label: 'Aide',
          translations: { en: 'Help' },
          items: [
            {
              label: 'Questions fréquentes',
              translations: { en: 'Frequently asked questions' },
              slug: 'aide/questions-frequentes',
            },
            {
              label: 'Configuration MCP (IA)',
              translations: { en: 'MCP setup (AI)' },
              slug: 'aide/mcp',
            },
          ],
        },
      ],
      components: {
        Head: './src/components/Head.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
    }),
  ],
});

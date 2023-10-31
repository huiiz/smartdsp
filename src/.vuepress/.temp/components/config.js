import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/vuepress-shared@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/@vueuse+core@10.5.0_vue@3.3.7/node_modules/@vueuse/core/index.mjs";
import Badge from "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "F:/ZhengHuiFile/Code/website/smartdsp/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});

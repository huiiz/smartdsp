import { defineClientConfig } from "@vuepress/client";
import VPCard from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/VPCard.js";
import CodeTabs from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-shared@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Playground from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "F:/Coding/nodejs/1/smartdsp/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.242_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("VPCard", VPCard)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
  },
  setup: () => {

  }
});

"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Exports","href":"/docs/api/","docId":"api/index"},{"type":"link","label":"Introduction","href":"/docs/","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/docs/basics/installation","docId":"basics/installation"},{"type":"link","label":"Example","href":"/docs/basics/example","docId":"basics/example"}]},{"type":"link","label":"React","href":"/docs/react","docId":"react"},{"type":"link","label":"Vue","href":"/docs/vue","docId":"vue"},{"type":"link","label":"Svelte","href":"/docs/svelte","docId":"svelte"},{"type":"category","label":"Advanced concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Working with text","href":"/docs/advanced/text","docId":"advanced/text"},{"type":"link","label":"Rich text editors","href":"/docs/advanced/richtext","docId":"advanced/richtext"},{"type":"link","label":"Boxed values","href":"/docs/advanced/boxed","docId":"advanced/boxed"},{"type":"link","label":"MobX integration","href":"/docs/advanced/mobx","docId":"advanced/mobx"},{"type":"link","label":"Yjs integration","href":"/docs/advanced/yjs","docId":"advanced/yjs"}]},{"type":"link","label":"Sync providers","href":"/docs/sync-providers","docId":"sync-providers"},{"type":"link","label":"Further reading","href":"/docs/further-reading","docId":"further-reading"}]},"docs":{"advanced/boxed":{"id":"advanced/boxed","title":"Boxed Javascript values (advanced)","description":"By default, all properties in the Synced store are made collaborative, independently.","sidebar":"tutorialSidebar"},"advanced/mobx":{"id":"advanced/mobx","title":"MobX integration (advanced)","description":"This section is intended for developers who are already using MobX in their application and don\'t want to use the built-in React, Vue or Reactive bindings.","sidebar":"tutorialSidebar"},"advanced/richtext":{"id":"advanced/richtext","title":"Collaborative rich text editing","description":"Instead of sharing plain strings or Text instances, what if you want to create a collaborative, (google docs style) rich text editing experience?","sidebar":"tutorialSidebar"},"advanced/text":{"id":"advanced/text","title":"Working with text","description":"There are several ways to work with text / strings in SyncedStore, depending on your needs for collaboration.","sidebar":"tutorialSidebar"},"advanced/yjs":{"id":"advanced/yjs","title":"Yjs integration (advanced)","description":"SyncedStore uses Yjs as underlying CRDT. Yjs is a CRDT implementation with a focus on performance and collaborative text editing. It does have a fairly steep learning curve, which is why SyncedStore hides as many of the Yjs internals as possible.","sidebar":"tutorialSidebar"},"api/index":{"id":"api/index","title":"@syncedstore/core","description":"References","sidebar":"tutorialSidebar"},"basics/example":{"id":"basics/example","title":"Plain javascript example","description":"Let\'s explore how SyncedStore works using a vanilla Javascript example. It\'s good to understand the basics, although you might want to skip ahead immediately to the React or Vue examples.","sidebar":"tutorialSidebar"},"basics/installation":{"id":"basics/installation","title":"Installation","description":"Install SyncedStore and required dependencies:","sidebar":"tutorialSidebar"},"further-reading":{"id":"further-reading","title":"Further reading","description":"Want to learn more about SyncedStore and Conflict-free Replicated Data Types (CRDTs)? Below is a list of interesting resources:","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction to SyncedStore","description":"SyncedStore is a library for building distributed, real-time collaborative web applications that sync automatically. This used to be quite complex, but with SyncedStore it\'s as easy as sharing a pie!","sidebar":"tutorialSidebar"},"react":{"id":"react","title":"React integration","description":"SyncedStore is designed to work seamlessly with React. Below, you\'ll find a basic todo app.","sidebar":"tutorialSidebar"},"svelte":{"id":"svelte","title":"Svelte integration","description":"SyncedStore works seamlessly together with Svelte Stores. Create a Svelte Store from your SyncedStore using svelteSyncedStore from the @syncedstore/svelte package.","sidebar":"tutorialSidebar"},"sync-providers":{"id":"sync-providers","title":"Sync providers","description":"So far, we\'ve focused mostly on how to change to state on a synced store, and how to listen (react to) changes and display them in your application.","sidebar":"tutorialSidebar"},"vue":{"id":"vue","title":"Vue integration","description":"SyncedStore works seamlessly together with Vue3\'s Reactivity system. To enable this, call enableVueBindings once, for example when setting up your store.","sidebar":"tutorialSidebar"}}}')}}]);
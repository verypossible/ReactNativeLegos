# React Native Legos
## A design system, and component kit to get you jamming on new UI quicker 🎸
This repo is welcoming to all UI components that can help get you jamming on the UI of your RN app.

### How to jam 🤙
1. clone this repo
2. `yarn install`
3. `yarn start`
4. boot the app from Xcode


### Directory Structure and Naming Conventions 📝
The UI side of `react` is all about reusability and composability, and you should be able to take any of these components and drop them into your app. Naming is always subject to change, but please try to keep to this scheme for maintainablity. Should a system wide change ever be made, an announcement will be made in Slack in the #front_end channel. We use `PascalCase` for our directories, component names, and exports:

#### Directory
```
    📁 ui
      📁 components
        📁 ComponentName
          📄 ComponentName.tsx
          📄 index.ts
        📄 index.ts
      📁 navigation
      📁 screens
    📄 theme.ts
  ```

#### Exports
```
  export default as ComponentName
  export { default as ComponentName } from "./ComponentName"
```

### Criteria for Submitting PRs 🌮
- components written in `typescript`
- components use `styled-components`
- any system wide shared styles should be written as a variable in the `theme.ts` file
- add documentation inline, and add any component API to a `readme.md` in the component directory
- all PRs must be reviewed and approved before merging to master
  - if adding a dependency for a component, please include in the PR notes, and note it in the component `README.md` file

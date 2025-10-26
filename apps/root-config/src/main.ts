// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html?raw";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(/* @vite-ignore */ name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

import Navigo from "navigo";
// import { Error } from "../Error";

const app = document.querySelector("#app");

const routerNavigo = new Navigo("/", { linksSelector: "a" });

const renderRouter = (content, target) => {
  target.innerHTML = content();
};

window.navigate = (path) => routerNavigo.navigate(path);
export function router(arr, DefaultLayout) {
  renderRouter(DefaultLayout, app);
  const body = document.querySelector(".body");
  arr.forEach((route) => {
    routerNavigo.on(route.path, (params) => {
      renderRouter(route.component, body, params);
    });
  });
//   routerNavigo.notFound(() => renderRouter(Error, root))
  routerNavigo.resolve();
}
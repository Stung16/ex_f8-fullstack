import Navigo from "navigo";

const app = document.querySelector("#app");

const routerNavigo = new Navigo("/", { linksSelector: "a" });

const render = (content, target) => {
  target.innerHTML = content();
};

window.navigate = (path) => routerNavigo.navigate(path);
export function router(arr, DefaultLayout) {
  render(DefaultLayout, app);
  const body = document.querySelector(".body");
  arr.forEach((route) => {
    routerNavigo.on(route.path, (params) => {
      render(route.component, body, params);
    });
  });
  routerNavigo.resolve();
}
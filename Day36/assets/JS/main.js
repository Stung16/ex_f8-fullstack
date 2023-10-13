import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;
const { SERVER_API } = config;
const postsEl = document.getElementById("posts");
const scroll_container = document.getElementById("scroll-container");
const page = 1;
const loading = false;

const render = (posts) => {
  postsEl.innerHTML = `
    ${posts
      .map(
        ({
          link,
          avata,
          name_user,
          title_post,
          img1,
          infor_post,
          img2,
          category,
        }) =>
          `
    <div class="post">
    <div class="inner-post">
      <div class="user">
        <a href="${link}"
          ><img src="${avata}" alt="avata"
        /></a>
        <span class="name-user">${name_user}</span>
      </div>
      <div class="trendding">
        <a href="#" class="tag-trendding"><span>#POPULAR</span></a>
      </div>
      <div class="content-post">
        <h2 class="title-post">${title_post}</h2>
        <img
          class="img-content"
          src="${img1}"
          alt="image"
        />
        <div class="infor-post">
          <p>${infor_post}</p>
        </div>
        <img src="${img2}" alt="Ông Zelensky tuyên bố không dự hội nghị G20 nếu ông Putin có mặt">
        <div class="category"><span>Category: ${category}</span></div>
      </div>
    </div>
  </div>
  <hr>`
      )
      .join("")}`;
};

const getPosts = async () => {
  const { data } = await client.get(
    `/posts?_limit=${PAGE_LIMIT}&_page=${page}`
  );
  loading = true
  render(data);
};
getPosts();



function loadMoreContent() {
    const loading =document.querySelector(".spinner")
    loading.classList.add("show")
}

scroll_container.addEventListener("scroll", () => {
  const isAtBottom =
    scroll_container.scrollTop + scroll_container.clientHeight >=
    postsEl.clientHeight;
  if (isAtBottom) {
    loadMoreContent();
  }
});
loadMoreContent();

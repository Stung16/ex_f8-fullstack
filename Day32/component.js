class F8 {
  static component(name, options) {
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          if (options.data) {
            // console.log(options.data());
            const data = options.data();
            Object.keys(data).forEach((keys) => {
              window[keys] = data[keys];
            });
          }
          if (options.template) {
            const templates = options.template.match(/{{.+?}}/g);
            var newArr = [];
            templates?.forEach(function (item) {
              newArr.push(item.match(/{{(.+?)}}/)[1]);
            });
            var templatesValue = options.template;
            newArr.forEach(function (key) {
              templatesValue = templatesValue.replace(
                /{{.+?}}/,
                `${window[key]}`
              );
            });
          }

          const templateEle = document.createElement("template");
          templateEle.innerHTML = templatesValue
          const templateNode = templateEle.content.cloneNode(true);
          const btnClick = templateNode.querySelectorAll("button")
          const valueCount =templateNode.querySelector(".valueCount")
          btnClick.forEach(function(btn) {
          const btnAttribute = btn.getAttribute(`v-on:click`);
          btn.addEventListener("click",function() {
            if (btnAttribute === "count--") {
              if(counter === 0){
              valueCount.innerText = ` 0 `
              }else{
                valueCount.innerText = ` ${--counter} `
              }
            }
            if (btnAttribute === "count++") {
              valueCount.innerText = ` ${++counter} `
            }
          })
            
          })          



          this.append(templateNode);
        }
      }
    );
  }
}






// class F8 {
//   static component(name, options) {
//     customElements.define(
//       name,
//       class extends HTMLElement {
//         constructor() {
//           super();
//         }
//         connectedCallback() {
//           if (options.data) {
//             const data = options.data();
//             Object.keys(data).forEach((keys) => {
//               window[keys] = data[keys];
//             });
//           }
//           if (options.template) {
//             const templates = options.template.match(/{{.+?}}/g);
//             const newArr = [];
//             templates?.map(function (item) {
//               const variableResult = item.match(/{{(.+?)}}/);
//               newArr.push(variableResult[1].trim());
//             });

//             var templatesValue = options.template;
//             newArr.forEach(function (key) {
//               templatesValue = templatesValue.replace(
//                 /{{.+?}}/,
//                 `${window[key]}`
//               );
//             });
//           }
//           const templateEle = document.createElement("template");
//           templateEle.innerHTML = templatesValue;
//           const templateNode = templateEle.content.cloneNode(true);
//           const btnCounts = templateNode.querySelectorAll("button");
//           // const countNumber = templateNode.querySelector(".count");
//           const h1 = templateNode.querySelector("h1");
//           btnCounts.forEach((btn) => {
//             const nameAttribute = btn.getAttributeNames();
//             const nameEvent = nameAttribute[0].split("v-on:");
//             const btnEvent = nameEvent[1];
//             const btnAttribute = btn.getAttribute(`v-on:${btnEvent}`);
//             // btn.addEventListener(btnEvent, () => {
//             //   if (btnAttribute === "count--") {
//             //     countNumber.innerText = --count;
//             //   }
//             //   if (btnAttribute === "count++") {
//             //     countNumber.innerText = ++count;
//             //   }
//             //   if (btnAttribute.includes("title=")) {
//             //     const contentTitle = btnAttribute.split("title=");
//             //     h1.innerText = contentTitle[1];
//             //   }
//             // });
//           });
//           this.append(templateNode);
//         }
//       }
//     );
//   }
// }

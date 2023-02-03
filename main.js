const post = document.querySelector(".post");
const button = document.querySelector("a");
button.addEventListener("click", readm);
let full_text = `The iPhone 15 is many months away, but it's hard for Apple to keep secrets about the iPhone lineup just because of how many suppliers are involved. There will be four iPhone 15 models in the same sizes as the iPhone 14 models, including two 6.1-inch iPhones and two 6.7-inch iPhones. One of each size will be standard iPhone 15 models, while the other two will be more expensive higher-end "Pro" models. As with the iPhone 14, some of the best features will be reserved for the iPhone 15 Pro models. Rumors so far suggest we can expect USB-C for all models, and the Dynamic Island is going to expand to the standard iPhone 15. Apple will use Qualcomm modem chips for the new devices as its own modem chips aren't quite ready. The standard iPhone 15 models will get an upgrade to the A16 chip, while the iPhone 15 Pro models could use improved 3-nanometer A17 chips. Pro models could see an upgrade to titanium frames, along with periscope lens camera technology for improvements to zoom. This roundup covers everything that we've heard about the iPhone 15 and iPhone 15 Pro, but keep in mind that it's early in the development cycle and Apple's plans could change.`;
let short_text = full_text.slice(0, 187) + "...";

function readm() {
  let text = post.textContent;
  if (text.length > 200) {
    button.innerText = 'Read More';
    post.textContent = short_text;
  }else {
    button.innerText = 'Hide';
    post.textContent = full_text;
  }
}

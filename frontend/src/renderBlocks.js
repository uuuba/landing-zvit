import { hero } from "./blocks/hero.js";
import { features } from "./blocks/features.js";
import { courses } from "./blocks/courses.js";
import { testimonials } from "./blocks/testimonials.js";
import { contacts } from "./blocks/contacts.js";

const renderers = { hero, features, courses, testimonials, contacts };

export function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      const render = renderers[block.type];
      if (!render) return "";
      return render(block);
    })
    .join("");
}

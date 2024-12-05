type EventHandler = (event: Event) => void;

interface Props {
  [key: string]: string | number | boolean | EventHandler | undefined;
}

export function h(tag: string, props: Props | null, ...children: (Node | string)[]): HTMLElement {
  const element = document.createElement(tag);

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        const eventName = key.slice(2).toLowerCase();
        element.addEventListener(eventName, value as EventHandler);
      } else if (value !== undefined) {
        element.setAttribute(key, String(value));
      }
    });
  }

  children.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      element.appendChild(document.createTextNode(child));
    }
  });

  return element;
}

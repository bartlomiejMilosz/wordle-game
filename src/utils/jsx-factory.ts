const entityMap = new Map<string, string>([
	["&", "amp"],
	["<", "lt"],
	[">", "gt"],
	['"', "quot"],
	["'", "#39"],
	["/", "#x2F"],
]);

function escapeHtml(str: string): string {
	return str.replace(/[&<>"'/\\]/g, (s) => `&${entityMap.get(s)};`);
}

function attributeMapper(val: string) {
	return (
		{
			tabIndex: "tabindex",
			className: "class",
			readOnly: "readonly",
		}[val] || val
	);
}

export function DOMcreateElement(
	tag: Function | string,
	attrs?: { [key: string]: any },
	...children: (HTMLElement | string)[]
): HTMLElement {
	attrs = attrs || {};
	const stack: any[] = [...children];

	if (typeof tag === "function") {
		attrs.children = stack;
		return tag(attrs);
	}

	const elm = document.createElement(tag);

	for (let [name, val] of Object.entries(attrs)) {
		name = escapeHtml(attributeMapper(name));
		switch (true) {
			case name.startsWith("on") && name.toLowerCase() in window:
				elm.addEventListener(name.toLowerCase().substr(2), val);
				break;
			case name === "ref":
				val(elm);
				break;
			case name === "style" && typeof val === "object":
				Object.assign(elm.style, val);
				break;
			case val === true:
				elm.setAttribute(name, name);
				break;
			case val !== false && val != null:
				elm.setAttribute(name, escapeHtml(String(val)));
				break;
			case val === false:
				elm.removeAttribute(name);
				break;
		}
	}

	while (stack.length) {
		const child = stack.shift();

		if (!Array.isArray(child)) {
			elm.appendChild(
				(child as HTMLElement).nodeType == null
					? document.createTextNode(child.toString())
					: child,
			);
		} else {
			stack.push(...child);
		}
	}

	return elm;
}

export function DOMcreateFragment(
	_attrs?: { [key: string]: any },
	...children: (HTMLElement | string)[]
): (HTMLElement | string)[] {
	return children;
}

import "./Grid.css";

export function Grid() {
	const gridItems = Array.from({ length: 30 }, () => "");
	return (
		<div className="grid-container">
			{gridItems.map((item) => {
				return <div className="grid-item" key={item}>{item}</div>;
			})}
		</div>
	);
}

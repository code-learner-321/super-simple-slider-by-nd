import { CheckboxControl, RangeControl } from "@wordpress/components";

const PaddingControlsDesktop = ({
	adjustAllPadding,
	paddingAll,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	setAttributes,
	isDesktop,
}) => {
	const onToggleAdjustAllPadding = (value) => {
		setAttributes({ adjustAllPadding: value });
	};

	const onChangePadding = (side, value) => {
		setAttributes({ [side]: value });
	};

	const onChangePaddingAll = (value) => {
		setAttributes({
			paddingAll: value,
			paddingTop: value,
			paddingRight: value,
			paddingBottom: value,
			paddingLeft: value,
		});
	};

	return (
		<>
			{isDesktop && (
				<CheckboxControl
					label="Adjust All Side Padding"
					checked={adjustAllPadding}
					onChange={onToggleAdjustAllPadding}
				/>
			)}
			{isDesktop && adjustAllPadding ? (
				<RangeControl
					label="Padding"
					value={paddingAll}
					onChange={onChangePaddingAll}
					min={0}
					max={100}
				/>
			) : (
				<>
					{isDesktop && (
						<RangeControl
							label="Padding Top"
							value={paddingTop}
							onChange={(value) => onChangePadding("paddingTop", value)}
							min={0}
							max={100}
						/>
					)}
					{isDesktop && (
						<RangeControl
							label="Padding Right"
							value={paddingRight}
							onChange={(value) => onChangePadding("paddingRight", value)}
							min={0}
							max={100}
						/>
					)}
					{isDesktop && (
						<RangeControl
							label="Padding Bottom"
							value={paddingBottom}
							onChange={(value) => onChangePadding("paddingBottom", value)}
							min={0}
							max={100}
						/>
					)}
					{isDesktop && (
						<RangeControl
							label="Padding Left"
							value={paddingLeft}
							onChange={(value) => onChangePadding("paddingLeft", value)}
							min={0}
							max={100}
						/>
					)}
				</>
			)}
		</>
	);
};

export default PaddingControlsDesktop;

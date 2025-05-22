import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	SelectControl,
	PanelRow,
	PanelBody,
	ColorPalette,
} from "@wordpress/components";
import { useState, useRef, useEffect } from "react";

const commonSliderSettings = ({
	sliderInterval,
	sliderHeight,
	sliderHeightTablet,
	sliderHeightMobile,
	fontFamilyFirstField,
	isDesktop,
	isTablet,
	alignItems,
	justifyContent,
	isMobile,
	backgroundColor,
	opacity,
	setAttributes,
}) => {
	const [height, setHeight] = useState(12);
	const [heightTablet, setHeightTablet] = useState(12);
	const [heightMobile, setHeightMobile] = useState(12);

	const onChangeHeightHandler = (value) => {
		setHeight(value);
		setAttributes({ sliderHeight: value });
	};
	const onChangeHeightHandlerTablet = (value) => {
		setHeightTablet(value);
		setAttributes({ sliderHeightTablet: value });
	};
	const onChangeHeightHandlerMobile = (value) => {
		setHeightMobile(value);
		setAttributes({ sliderHeightMobile: value });
	};

	const fontFamilyOptions = [
		{ label: "Arial", value: "Arial" },
		{ label: "Helvetica", value: "Helvetica" },
		{ label: "Times New Roman", value: "Times New Roman" },
		{ label: "Courier New", value: "Courier New" },
		{ label: "Georgia", value: "Georgia" },
		{ label: "Verdana", value: "Verdana" },
		{ label: "Tahoma", value: "Tahoma" },
		{ label: "Trebuchet MS", value: "Trebuchet MS" },
		{ label: "Comic Sans MS", value: "Comic Sans MS" },
		{ label: "Lucida Console", value: "Lucida Console" },
		{ label: "Monaco", value: "Monaco" },
		{ label: "Garamond", value: "Garamond" },
		{ label: "Impact", value: "Impact" },
		{ label: "Palatino", value: "Palatino" },
		{ label: "Century Gothic", value: "Century Gothic" },
		{ label: "Brush Script MT", value: "Brush Script MT" },
		{ label: "Cambria", value: "Cambria" },
		{ label: "Candara", value: "Candara" },
		{ label: "Consolas", value: "Consolas" },
		{ label: "Corbel", value: "Corbel" },
		{ label: "Franklin Gothic Medium", value: "Franklin Gothic Medium" },
		{ label: "Gill Sans", value: "Gill Sans" },
		{ label: "Perpetua", value: "Perpetua" },
		{ label: "Rockwell", value: "Rockwell" },
		{ label: "Segoe UI", value: "Segoe UI" },
		{ label: "Futura", value: "Futura" },
		{ label: "Calibri", value: "Calibri" },
		{ label: "Book Antiqua", value: "Book Antiqua" },
		{ label: "Lucida Bright", value: "Lucida Bright" },
		{ label: "Papyrus", value: "Papyrus" },
		{ label: "Didot", value: "Didot" },
		{ label: "French Script MT", value: "French Script MT" },
		{ label: "Herculanum", value: "Herculanum" },
		{ label: "Kohinoor Bangla", value: "Kohinoor Bangla" },
	];
	const selectRef = useRef();
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.target !== selectRef.current) return;

			const currentIndex = fontFamilyOptions.findIndex(
				(option) => option.value === fontFamilyFirstField,
			);
			let newIndex;

			if (event.key === "ArrowUp") {
				newIndex =
					(currentIndex - 1 + fontFamilyOptions.length) %
					fontFamilyOptions.length;
			} else if (event.key === "ArrowDown") {
				newIndex = (currentIndex + 1) % fontFamilyOptions.length;
			}

			if (newIndex !== undefined) {
				setAttributes({
					fontFamilyFirstField: fontFamilyOptions[newIndex].value,
				});
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [fontFamilyFirstField, fontFamilyOptions, setAttributes]);

	// alignItems and JustifyContent
	const onChangeAlignItems = (newAlignItems) => {
		setAttributes({ alignItems: newAlignItems });
	};

	const onChangeJustifyContent = (newJustifyContent) => {
		setAttributes({ justifyContent: newJustifyContent });
	};

	//CAPTION BACKGROUND WITH OPACITY..

	const onChangeComplete = (color) => {
		if (color) {
			const rgbaColor = hexToRgba(color, opacity / 100);
			setAttributes({ backgroundColor: rgbaColor });
		} else {
			console.error("Invalid color object:", color);
		}
	};

	const onOpacityChange = (newOpacity) => {
		const rgbaColor = backgroundColorToRgba(backgroundColor, newOpacity / 100);
		setAttributes({ opacity: newOpacity, backgroundColor: rgbaColor });
	};
	const handleSliderInterval = (interval) => {
		setAttributes({sliderInterval:interval})
	}

	const hexToRgba = (hex, alpha) => {
		let r = 0,
			g = 0,
			b = 0;
		if (hex.length === 4) {
			r = parseInt(hex[1] + hex[1], 16);
			g = parseInt(hex[2] + hex[2], 16);
			b = parseInt(hex[3] + hex[3], 16);
		} else if (hex.length === 7) {
			r = parseInt(hex[1] + hex[2], 16);
			g = parseInt(hex[3] + hex[4], 16);
			b = parseInt(hex[5] + hex[6], 16);
		}
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	};

	const backgroundColorToRgba = (backgroundColor, alpha) => {
		const color = backgroundColor.match(
			/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
		);
		if (color) {
			const r = color[1];
			const g = color[2];
			const b = color[3];
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		}
		return backgroundColor;
	};

	return (
		<>
			<RangeControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label="Slider Height"
				value={
					isDesktop
						? sliderHeight
						: isTablet
						? sliderHeightTablet
						: sliderHeightMobile
				}
				onChange={
					isDesktop
						? onChangeHeightHandler
						: isTablet
						? onChangeHeightHandlerTablet
						: onChangeHeightHandlerMobile
				}
				min={12}
				max={100}
			/>

			<SelectControl
				label="Font Family"
				value={fontFamilyFirstField}
				options={fontFamilyOptions}
				onChange={(value) => setAttributes({ fontFamilyFirstField: value })}
				ref={selectRef}
			/>
			<SelectControl
				label={__("Align Items")}
				value={alignItems}
				options={[
					{ label: "Flex Start", value: "flex-start" },
					{ label: "Center", value: "center" },
					{ label: "Flex End", value: "flex-end" },
					{ label: "Stretch", value: "stretch" },
					{ label: "Baseline", value: "baseline" },
				]}
				onChange={onChangeAlignItems}
			/>
			<SelectControl
				label={__("Justify Content")}
				value={justifyContent}
				options={[
					{ label: "Flex Start", value: "flex-start" },
					{ label: "Center", value: "center" },
					{ label: "Flex End", value: "flex-end" },
					{ label: "Space Between", value: "space-between" },
					{ label: "Space Around", value: "space-around" },
					{ label: "Space Evenly", value: "space-evenly" },
				]}
				onChange={onChangeJustifyContent}
			/>
			<PanelBody title="Background Layer Opacity" initialOpen={false}>
				<PanelRow className="panel-column">
					<label className="fontLabel">
						{__("BACKGROUND LAYER COLOR", "super-simple-image-slider")}
					</label>
					<ColorPalette value={backgroundColor} onChange={onChangeComplete} />
				</PanelRow>
				<RangeControl
					label="Opacity"
					value={opacity}
					onChange={onOpacityChange}
					min={0}
					max={100}
				/>
			</PanelBody>
			<PanelBody title="Image Slider Interval Settings" initialOpen={false}>
				<RangeControl
					label="Set Interval"
					value={sliderInterval}
					onChange={handleSliderInterval}
					min={1000}
					max={10000}
					step={500}
				/>
			</PanelBody>
		</>
	);
};
export default commonSliderSettings;

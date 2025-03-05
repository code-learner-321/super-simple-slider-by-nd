import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	SelectControl,
	ColorPicker,
	PanelRow,
} from "@wordpress/components";

const typographyThirdField = ({
	thirdFieldfontWeight,
	sliderMobileSizeThirdField,
	sliderTabletSizeThirdField,
	sliderDesktopSizeThirdField,
	textColorThirdField,
	isTablet,
	isDesktop,
	setAttributes,
}) => {
	return (
		<>
			<SelectControl
				label={__("Font Weight", "text-domain")}
				value={thirdFieldfontWeight}
				options={[
					{ label: __("Normal", "text-domain"), value: "normal" },
					{ label: __("Bold", "text-domain"), value: "bold" },
					{ label: __("Bolder", "text-domain"), value: "bolder" },
					{ label: __("Lighter", "text-domain"), value: "lighter" },
					{ label: __("Italic", "text-domain"), value: "italic" },
				]}
				onChange={(value) => setAttributes({ thirdFieldfontWeight: value })}
			/>
			<RangeControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label={
					isDesktop
						? "Select Desktop Font Size"
						: isTablet
						? "Select Tablet Font Size"
						: "Select Mobile Font Size"
				}
				value={
					isDesktop
						? sliderDesktopSizeThirdField
						: isTablet
						? sliderTabletSizeThirdField
						: sliderMobileSizeThirdField
				}
				onChange={(value) =>
					isDesktop
						? setAttributes({ sliderDesktopSizeThirdField: value })
						: isTablet
						? setAttributes({ sliderTabletSizeThirdField: value })
						: setAttributes({ sliderMobileSizeThirdField: value })
				}
				min={10}
				max={100}
			/>
			<PanelRow className="panel-column">
				<label className="fontLabel">
					{__("SELECT FONT COLOR", "super-simple-image-slider")}
				</label>
				<ColorPicker
					color={textColorThirdField}
					onChange={(newColor) =>
						setAttributes({ textColorThirdField: newColor })
					}
					enableAlpha
					defaultValue="#000"
				/>
			</PanelRow>
		</>
	);
};
export default typographyThirdField;

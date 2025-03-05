import { __ } from "@wordpress/i18n";
import {
	RangeControl,
	SelectControl,
	ColorPicker,
	PanelRow,
} from "@wordpress/components";

const typographySecondField = ({
	secondFieldfontWeight,
	sliderMobileSizeSecondField,
	sliderTabletSizeSecondField,
	sliderDesktopSizeSecondField,
	textColorSecondField,
	isTablet,
	isDesktop,
	setAttributes,
}) => {
	return (
		<>
			<SelectControl
				label={__("Font Weight", "text-domain")}
				value={secondFieldfontWeight}
				options={[
					{ label: __("Normal", "text-domain"), value: "normal" },
					{ label: __("Bold", "text-domain"), value: "bold" },
					{ label: __("Bolder", "text-domain"), value: "bolder" },
					{ label: __("Lighter", "text-domain"), value: "lighter" },
					{ label: __("Italic", "text-domain"), value: "italic" },
				]}
				onChange={(value) => setAttributes({ secondFieldfontWeight: value })}
			/>
				<RangeControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label={ isDesktop ? "Select Desktop Font Size" : isTablet ? "Select Tablet Font Size" : "Select Mobile Font Size"} 
					value={isDesktop ? sliderDesktopSizeSecondField : isTablet ? sliderTabletSizeSecondField : sliderMobileSizeSecondField}
					onChange={(value) =>
						isDesktop ? setAttributes({ sliderDesktopSizeSecondField: value }) : isTablet ? setAttributes({ sliderTabletSizeSecondField: value }) : setAttributes({ sliderMobileSizeSecondField: value })
					}
					min={10}
					max={100}
				/>

			<PanelRow className="panel-column">
				<label className="fontLabel">
					{__("SELECT FONT COLOR", "super-simple-image-slider")}
				</label>
				<ColorPicker
					color={textColorSecondField}
					onChange={(newColor) =>
						setAttributes({ textColorSecondField: newColor })
					}
					enableAlpha
					defaultValue="#000"
				/>
			</PanelRow>
		</>
	);
};
export default typographySecondField;

import { CheckboxControl, RangeControl } from "@wordpress/components";

const PaddingControlsTablet = ({ adjustAllPaddingTablet, paddingAllTablet, paddingTopTablet, paddingRightTablet, paddingBottomTablet, paddingLeftTablet, setAttributes, isTablet }) => {
    const onToggleAdjustAllPaddingTablet = (value) => {
        setAttributes({ adjustAllPaddingTablet: value });
    };

    const onChangePaddingTablet = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAllTablet = (value) => {
        setAttributes({
            paddingAllTablet: value,
            paddingTopTablet: value,
            paddingRightTablet: value,
            paddingBottomTablet: value,
            paddingLeftTablet: value,
        });
    };

    return (
        <>
            {isTablet && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={adjustAllPaddingTablet}
                    onChange={onToggleAdjustAllPaddingTablet}
                />
            )}
            {isTablet && adjustAllPaddingTablet ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={paddingAllTablet}
                    onChange={onChangePaddingAllTablet}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isTablet && (
                        <RangeControl
                            label="Padding Top"
                            value={paddingTopTablet}
                            onChange={(value) => onChangePaddingTablet('paddingTopTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Right"
                            value={paddingRightTablet}
                            onChange={(value) => onChangePaddingTablet('paddingRightTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Bottom"
                            value={paddingBottomTablet}
                            onChange={(value) => onChangePaddingTablet('paddingBottomTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Left"
                            value={paddingLeftTablet}
                            onChange={(value) => onChangePaddingTablet('paddingLeftTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default PaddingControlsTablet;

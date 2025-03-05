import { CheckboxControl, RangeControl } from "@wordpress/components";

const ThirdFieldPaddingControlsTablet = ({
    thirdFieldPaddingAllTablet,
    thirdFieldPaddingTopTablet,
    thirdFieldPaddingRightTablet,
    thirdFieldPaddingBottomTablet,
    thirdFieldPaddingLeftTablet,
    thirdFieldAdjustAllPaddingTablet,
    isTablet,
    setAttributes }) => {
    const thirdFieldPaddingHandle = (value) => {
        setAttributes({ thirdFieldAdjustAllPaddingTablet: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            thirdFieldPaddingAllTablet: value,
            thirdFieldPaddingTopTablet: value,
            thirdFieldPaddingRightTablet: value,
            thirdFieldPaddingBottomTablet: value,
            thirdFieldPaddingLeftTablet: value,
        });
    };

    return (
        <>
            {isTablet && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={thirdFieldAdjustAllPaddingTablet}
                    onChange={thirdFieldPaddingHandle}
                />
            )}
            {isTablet && thirdFieldAdjustAllPaddingTablet ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={thirdFieldPaddingAllTablet}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isTablet && (
                        <RangeControl
                            label="Padding Top"
                            value={thirdFieldPaddingTopTablet}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingTopTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Right"
                            value={thirdFieldPaddingRightTablet}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingRightTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Bottom"
                            value={thirdFieldPaddingBottomTablet}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingBottomTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Left"
                            value={thirdFieldPaddingLeftTablet}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingLeftTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ThirdFieldPaddingControlsTablet;

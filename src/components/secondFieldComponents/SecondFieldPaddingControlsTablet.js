import { CheckboxControl, RangeControl } from "@wordpress/components";

const SecondFieldPaddingControlsTablet = ({
    secondFieldPaddingAllTablet,
    secondFieldPaddingTopTablet,
    secondFieldPaddingRightTablet,
    secondFieldPaddingBottomTablet,
    secondFieldPaddingLeftTablet,
    secondFieldAdjustAllPaddingTablet,
    isTablet,
    setAttributes }) => {
    const secondFieldPaddingHandle = (value) => {
        setAttributes({ secondFieldAdjustAllPaddingTablet: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            secondFieldPaddingAllTablet: value,
            secondFieldPaddingTopTablet: value,
            secondFieldPaddingRightTablet: value,
            secondFieldPaddingBottomTablet: value,
            secondFieldPaddingLeftTablet: value,
        });
    };

    return (
        <>
            {isTablet && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={secondFieldAdjustAllPaddingTablet}
                    onChange={secondFieldPaddingHandle}
                />
            )}
            {isTablet && secondFieldAdjustAllPaddingTablet ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={secondFieldPaddingAllTablet}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isTablet && (
                        <RangeControl
                            label="Padding Top"
                            value={secondFieldPaddingTopTablet}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingTopTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Right"
                            value={secondFieldPaddingRightTablet}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingRightTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Bottom"
                            value={secondFieldPaddingBottomTablet}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingBottomTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isTablet && (
                        <RangeControl
                            label="Padding Left"
                            value={secondFieldPaddingLeftTablet}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingLeftTablet', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default SecondFieldPaddingControlsTablet;

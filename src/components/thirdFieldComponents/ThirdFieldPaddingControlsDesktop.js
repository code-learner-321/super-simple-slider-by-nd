import { CheckboxControl, RangeControl } from "@wordpress/components";

const ThirdFieldPaddingControlsDesktop = ({
    thirdFieldPaddingAllDesktop,
    thirdFieldPaddingTopDesktop,
    thirdFieldPaddingRightDesktop,
    thirdFieldPaddingBottomDesktop,
    thirdFieldPaddingLeftDesktop,
    thirdFieldAdjustAllPaddingDesktop,
    isDesktop,
    setAttributes }) => {
    const thirdFieldPaddingHandle = (value) => {
        setAttributes({ thirdFieldAdjustAllPaddingDesktop: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            thirdFieldPaddingAllDesktop: value,
            thirdFieldPaddingTopDesktop: value,
            thirdFieldPaddingRightDesktop: value,
            thirdFieldPaddingBottomDesktop: value,
            thirdFieldPaddingLeftDesktop: value,
        });
    };

    return (
        <>
            {isDesktop && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={thirdFieldAdjustAllPaddingDesktop}
                    onChange={thirdFieldPaddingHandle}
                />
            )}
            {isDesktop && thirdFieldAdjustAllPaddingDesktop ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={thirdFieldPaddingAllDesktop}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isDesktop && (
                        <RangeControl
                            label="Padding Top"
                            value={thirdFieldPaddingTopDesktop}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingTopDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Right"
                            value={thirdFieldPaddingRightDesktop}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingRightDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Bottom"
                            value={thirdFieldPaddingBottomDesktop}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingBottomDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Left"
                            value={thirdFieldPaddingLeftDesktop}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingLeftDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ThirdFieldPaddingControlsDesktop;

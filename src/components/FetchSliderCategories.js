import { __ } from '@wordpress/i18n';
import { useSelect } from "@wordpress/data";
import { SelectControl } from "@wordpress/components";

export default function FetchSliderCategories({ attributes, setAttributes }){
    const { selectedSliderCategory } = attributes;

    const categories = useSelect((select) => {
        const cat = select('core').getEntityRecords('taxonomy', 'simple_slider_category_by_nd', { per_page: -1 });
        return cat;
    }, []);
    const handleSelectedSliderCategory = (value) =>{
        setAttributes({ selectedSliderCategory: value })
    }
    return (
        <div className='select-cat'>
            {categories && categories.length > 0 ? (
                <SelectControl
                    label={__('Select Category', 'textdomain')}
                    value={selectedSliderCategory}
                    options={[
                        { label: 'Select Category', value: '' },
                        ...categories.map((category) => ({
                            label: category.name,
                            value: category.id
                        }))
                    ]}
                    onChange={handleSelectedSliderCategory}
                />
            ) : (
                <p>{__('No slider categories found.', 'textdomain')}</p>
            )}
        </div>
    );

}
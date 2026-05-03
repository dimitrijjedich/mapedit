import EditorLayout from '@/Layouts/EditorLayout';
import MapEditor from '@/Components/MapEditor';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ColorShape, TileShape } from '@/types';

export default function Create({ tiles, colors }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        cells: new Array(676).fill(null),
    });

    function submit(e) {
        e.preventDefault();
        post(route('maps.store'));
    }

    return (
        <EditorLayout
            title="New Map"
            saveLabel="Save Map"
            backHref={route('maps.index')}
            onSubmit={submit}
            processing={processing}
        >
            <div>
                <InputLabel htmlFor="name" value="Name" className="mb-1" />
                <TextInput
                    id="name"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                    className="w-48"
                    placeholder="e.g. Stage 1"
                />
                <InputError message={errors.name} className="mt-1" />
            </div>

            <div className="bg-dark rounded-lg p-6">
                <MapEditor
                    cells={data.cells}
                    tiles={tiles}
                    colors={colors}
                    onChange={cells => setData('cells', cells)}
                />
            </div>

            <InputError message={errors.cells} />
        </EditorLayout>
    );
}

Create.propTypes = {
    tiles: PropTypes.arrayOf(TileShape).isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

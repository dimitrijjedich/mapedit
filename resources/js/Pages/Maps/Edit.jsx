import EditorLayout from '@/Layouts/EditorLayout';
import MapEditor from '@/Components/MapEditor';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ColorShape, MapShape, TileShape } from '@/types';

export default function Edit({ map, tiles, colors }) {
    const { data, setData, put, processing, errors } = useForm({
        name: map.name,
        cells: map.cells,
    });

    function submit(e) {
        e.preventDefault();
        put(route('maps.update', map.id));
    }

    return (
        <EditorLayout
            title="Edit Map"
            saveLabel="Update Map"
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
                />
                <InputError message={errors.name} className="mt-1" />
            </div>

            <div className="bg-dark rounded-lg p-6">
                <MapEditor
                    key={map.id}
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

Edit.propTypes = {
    map: MapShape.isRequired,
    tiles: PropTypes.arrayOf(TileShape).isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

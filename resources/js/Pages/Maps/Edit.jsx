import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MapEditor from '@/Components/MapEditor';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">Edit Map</h2>}>
            <Head title="Edit Map" />

            <div className="py-4 max-w-7xl mx-auto px-4">
                <form onSubmit={submit} className="flex flex-col items-center gap-6">
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

                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>Update Map</Button>
                        <LinkButton href={route('maps.index')} variant="secondary">Cancel</LinkButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

Edit.propTypes = {
    map: MapShape.isRequired,
    tiles: PropTypes.arrayOf(TileShape).isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

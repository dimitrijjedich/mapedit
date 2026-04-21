import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TileEditor from '@/Components/TileEditor';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ColorShape, TileShape } from '@/types';

export default function Edit({ tile, colors }) {
    const { data, setData, put, processing, errors } = useForm({
        name: tile.name,
        size: tile.size,
        pixels: tile.pixels,
    });

    function submit(e) {
        e.preventDefault();
        put(route('tiles.update', tile.id));
    }

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">Edit Tile</h2>}>
            <Head title="Edit Tile" />

            <div className="py-8 max-w-5xl mx-auto px-4">
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
                        <TileEditor
                            key={tile.id}
                            size={data.size}
                            pixels={data.pixels}
                            colors={colors}
                            onChange={pixels => setData('pixels', pixels)}
                        />
                    </div>

                    <InputError message={errors.pixels} />

                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>
                            Update Tile
                        </Button>
                        <LinkButton href={route('tiles.index')} variant="secondary">Cancel</LinkButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

Edit.propTypes = {
    tile: TileShape.isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

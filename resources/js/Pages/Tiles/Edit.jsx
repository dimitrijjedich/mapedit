import EditorLayout from '@/Layouts/EditorLayout';
import TileEditor from '@/Components/TileEditor';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';
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
        <EditorLayout
            title="Edit Tile"
            saveLabel="Update Tile"
            backHref={route('tiles.index')}
            onSubmit={submit}
            processing={processing}
        >
            <div className="flex gap-4 items-start">
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

                <div>
                    <InputLabel htmlFor="size" value="Size" className="mb-1" />
                    <select
                        id="size"
                        value={data.size}
                        disabled
                        className="border border-gray bg-dark text-white rounded pl-3 pr-8 py-2 text-sm opacity-25 cursor-not-allowed"
                    >
                        <option value={8}>8×8</option>
                        <option value={16}>16×16</option>
                    </select>
                </div>
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
        </EditorLayout>
    );
}

Edit.propTypes = {
    tile: TileShape.isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

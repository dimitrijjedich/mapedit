import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TileEditor from '@/Components/TileEditor';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Head, useForm } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ColorShape } from '@/types';

export default function Create({ colors }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        size: 8,
        pixels: new Array(64).fill(null),
    });

    function handleSizeChange(newSize) {
        setData({
            ...data,
            size: newSize,
            pixels: new Array(newSize * newSize).fill(null),
        });
    }

    function submit(e) {
        e.preventDefault();
        post(route('tiles.store'));
    }

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">New Tile</h2>}>
            <Head title="New Tile" />

            <div className="py-8 max-w-5xl mx-auto px-4">
                <form onSubmit={submit} className="flex flex-col items-center gap-6">
                    <div className="flex gap-4 items-start">
                        <div>
                            <InputLabel htmlFor="name" value="Name" className="mb-1" />
                            <TextInput
                                id="name"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-48"
                                placeholder="e.g. Brick"
                            />
                            <InputError message={errors.name} className="mt-1" />
                        </div>

                        <div>
                            <InputLabel htmlFor="size" value="Size" className="mb-1" />
                            <select
                                id="size"
                                value={data.size}
                                onChange={e => handleSizeChange(Number(e.target.value))}
                                className="border border-gray bg-dark text-white rounded pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange"
                            >
                                <option value={8}>8×8</option>
                                <option value={16}>16×16</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-dark rounded-lg p-6">
                        <TileEditor
                            key={data.size}
                            size={data.size}
                            pixels={data.pixels}
                            colors={colors}
                            onChange={pixels => setData('pixels', pixels)}
                        />
                    </div>

                    <InputError message={errors.pixels} />

                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>
                            Save Tile
                        </Button>
                        <LinkButton href={route('tiles.index')} variant="secondary">Cancel</LinkButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

Create.propTypes = {
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

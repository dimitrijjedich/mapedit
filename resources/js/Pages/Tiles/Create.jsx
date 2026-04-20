import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TileEditor from '@/Components/TileEditor';
import { Head, Link, useForm } from '@inertiajs/react';
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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">New Tile</h2>}>
            <Head title="New Tile" />

            <div className="py-8 max-w-5xl mx-auto px-4">
                <form onSubmit={submit} className="flex flex-col items-center gap-6">
                    <div className="flex gap-4 items-start">
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-gray-500"
                                placeholder="e.g. Brick"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="size" className="block text-sm text-gray-600 mb-1">Size</label>
                            <select
                                id="size"
                                value={data.size}
                                onChange={e => handleSizeChange(Number(e.target.value))}
                                className="border border-gray-300 rounded pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                            >
                                <option value={8}>8×8</option>
                                <option value={16}>16×16</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6">
                        <TileEditor
                            key={data.size}
                            size={data.size}
                            pixels={data.pixels}
                            colors={colors}
                            onChange={pixels => setData('pixels', pixels)}
                        />
                    </div>

                    {errors.pixels && <p className="text-red-500 text-xs">{errors.pixels}</p>}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 disabled:opacity-50"
                        >
                            Save Tile
                        </button>
                        <Link href={route('tiles.index')} className="px-4 py-2 text-sm text-gray-600 rounded hover:bg-gray-100">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

Create.propTypes = {
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload } from 'primereact/fileupload';
import { Calendar } from 'primereact/calendar';

export const ProductCreateModal = ({ visible, onHide, onSave }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [timeS, setTimeS] = useState(null);
    const [timeE, setTimeE] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const handleFileSelect = (event) => {
        const file = event.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onUpload = () => {
        console.log('hola')
    };

    const onSubmit = (data) => {
        onSave(data);
        onHide();
    };

    return (
        <Dialog
            header="Crear Producto"
            visible={visible}
            style={{ width: '80vw' }}
            onHide={onHide}
            modal
        >
            <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                <div className="p-field flex flex-row">
                    <FileUpload
                        className='bg-primary'
                        mode="basic"
                        name="demo[]"
                        url="/api/upload"
                        accept="image/*"
                        maxFileSize={1000000}
                        onSelect={handleFileSelect}
                        onUpload={onUpload}
                        chooseLabel="Seleccionar archivo"
                    />
                </div>
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Previsualización"
                        className="mt-2 w-32 h-32 object-cover rounded-lg"
                    />
                )}
                <div className="field mt-2 border-t-4 pt-2">
                    <label htmlFor="price">Precio</label>
                    <InputText id="price" type="number" {...register('price')} />
                </div>
                <div className="field mt-2">
                    <label htmlFor="location">Ubicación</label>
                    <InputText id="location" {...register('location')} />
                </div>
                <div className="field mt-2">
                    <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                        Desde las:
                    </label>
                    <Calendar id="calendar-timeonly" value={timeS} onChange={(e) => setTimeS(e.value)} timeOnly />
                </div>
                <div className="field mt-2">
                    <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                        Hasta las:
                    </label>
                    <Calendar id="calendar-timeonly" value={timeE} onChange={(e) => setTimeE(e.value)} timeOnly />
                </div>
                <div className="field mt-2">
                    <label htmlFor="description">Descripción</label>
                    <InputTextarea
                        id="description"
                        className='w-full'
                        rows={5}
                        {...register('description')}
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button className='text-white bg-secondary p-2 rounded-lg mr-3' type="submit">
                        Guardar
                    </button>
                    <button className="ml-2 bg-danger text-white p-2 rounded-lg" onClick={onHide} type="button">
                        Cancelar
                    </button>
                </div>
            </form>
        </Dialog>
    );
};

import { Modal } from './Modal';

export default {
    Modal: 'Example/Modal',
    component: Modal,
};

export const Primary = {
    args: {
        boton: 'Abrir Modal',
        titulo: 'Título del Modal',
        parrafouno: `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.`,
        parrafodos: `Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.`,
        parrafotres: `Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.`,
        botonModal: 'Guardar cambios',
        
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    }
    
}